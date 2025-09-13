import { useState, useEffect } from 'react';
import { 
  Brain, ArrowLeft, CheckCircle, XCircle, 
  Zap, Clock, TrendingUp, Sparkles, Volume2,
  Eye, Lightbulb, BookOpen, Award, Star,
  Play, Pause, SkipForward
} from 'lucide-react';

export default function Flashcards() {
  // Mock data for the study set (in real app, this would come from useParams and API)
  const studySet = {
    id: 1,
    title: 'Advanced React Patterns',
    description: 'Higher-order components, render props, compound components and more advanced React patterns',
    cardCount: 45,
    color: 'from-blue-500 to-purple-600',
    difficulty: 'Advanced',
    category: 'Frontend'
  };

  const cards = [
    {
      id: 1,
      front: "What is a Higher-Order Component (HOC) in React?",
      back: "A Higher-Order Component is a function that takes a component and returns a new component. It's a pattern for reusing component logic. HOCs are not part of the React API, but a pattern that emerges from React's compositional nature.",
      difficulty: 'medium',
      hint: "Think about functions that take functions as arguments..."
    },
    {
      id: 2,
      front: "What are Render Props in React?",
      back: "Render Props is a technique for sharing code between React components using a prop whose value is a function. A component with a render prop takes a function that returns a React element and calls it instead of implementing its own render logic.",
      difficulty: 'hard',
      hint: "It's about sharing logic through function props..."
    },
    {
      id: 3,
      front: "What is the Compound Component pattern?",
      back: "Compound Components is a pattern where components work together to form a complete UI. The parent component manages the state, and child components communicate with the parent through context or props. Examples include HTML <select> and <option> tags.",
      difficulty: 'easy',
      hint: "Think about components that work as a family..."
    },
    {
      id: 4,
      front: "What is React.memo() used for?",
      back: "React.memo() is a higher order component that memoizes the result of a component. If the component renders the same result given the same props, React will skip rendering the component and reuse the last rendered result, improving performance.",
      difficulty: 'medium',
      hint: "It's about preventing unnecessary re-renders..."
    },
    {
      id: 5,
      front: "What is the useCallback hook?",
      back: "useCallback is a hook that returns a memoized callback function. It's useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders. The callback will only change if one of the dependencies has changed.",
      difficulty: 'hard',
      hint: "It's about memoizing functions to prevent re-renders..."
    }
  ];

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [studyMode, setStudyMode] = useState('flashcards'); // flashcards, quiz, review
  const [sessionStats, setSessionStats] = useState({
    correct: 0,
    incorrect: 0,
    totalTime: 0,
    streak: 0,
    bestStreak: 0
  });
  const [isPlaying, setIsPlaying] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [sessionStartTime] = useState(Date.now());
  const [cardStartTime, setCardStartTime] = useState(Date.now());

  const currentCard = cards[currentCardIndex];
  const progress = ((currentCardIndex + 1) / cards.length) * 100;

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setSessionStats(prev => ({
          ...prev,
          totalTime: Math.floor((Date.now() - sessionStartTime) / 1000)
        }));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, sessionStartTime]);

  const handleCardAnswer = (isCorrect) => {
    const timeSpent = Math.floor((Date.now() - cardStartTime) / 1000);
    
    setSessionStats(prev => ({
      ...prev,
      correct: isCorrect ? prev.correct + 1 : prev.correct,
      incorrect: !isCorrect ? prev.incorrect + 1 : prev.incorrect,
      streak: isCorrect ? prev.streak + 1 : 0,
      bestStreak: isCorrect && prev.streak + 1 > prev.bestStreak ? prev.streak + 1 : prev.bestStreak
    }));

    // Move to next card
    setTimeout(() => {
      if (currentCardIndex < cards.length - 1) {
        setCurrentCardIndex(prev => prev + 1);
        setShowAnswer(false);
        setShowHint(false);
        setCardStartTime(Date.now());
      } else {
        // Session complete
        setIsPlaying(false);
      }
    }, 1500);
  };

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'easy': return 'text-green-400 bg-green-400/10';
      case 'medium': return 'text-yellow-400 bg-yellow-400/10';
      case 'hard': return 'text-red-400 bg-red-400/10';
      default: return 'text-gray-400 bg-gray-400/10';
    }
  };

  if (currentCardIndex >= cards.length) {
    // Session Complete Screen
    const accuracy = Math.round((sessionStats.correct / (sessionStats.correct + sessionStats.incorrect)) * 100) || 0;
    
    return (
      <div className="min-h-screen bg-black">
        <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-12 backdrop-blur-xl">
              
              {/* Success Animation */}
              <div className="mb-8">
                <div className="relative mx-auto w-32 h-32">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse"></div>
                  <div className="relative bg-gradient-to-r from-green-500 to-emerald-600 rounded-full w-full h-full flex items-center justify-center">
                    <Award className="h-16 w-16 text-white" />
                  </div>
                </div>
              </div>

              <h1 className="text-4xl font-black text-white mb-4">Session Complete!</h1>
              <p className="text-xl text-gray-300 mb-8">Amazing work! You've finished studying {studySet.title}</p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="text-2xl font-bold text-green-400">{sessionStats.correct}</div>
                  <div className="text-sm text-gray-400">Correct</div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="text-2xl font-bold text-red-400">{sessionStats.incorrect}</div>
                  <div className="text-sm text-gray-400">Incorrect</div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="text-2xl font-bold text-blue-400">{accuracy}%</div>
                  <div className="text-sm text-gray-400">Accuracy</div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="text-2xl font-bold text-purple-400">{formatTime(sessionStats.totalTime)}</div>
                  <div className="text-sm text-gray-400">Time</div>
                </div>
              </div>

              {/* Achievement */}
              {sessionStats.bestStreak >= 3 && (
                <div className="bg-gradient-to-r from-yellow-400/10 to-orange-400/10 border border-yellow-400/20 rounded-xl p-4 mb-8">
                  <div className="flex items-center justify-center space-x-2">
                    <Star className="h-6 w-6 text-yellow-400" />
                    <span className="text-lg font-bold text-yellow-400">
                      Best Streak: {sessionStats.bestStreak} cards!
                    </span>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => window.history.back()}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white py-4 px-6 rounded-xl font-bold transition-all duration-300 transform hover:scale-105"
                >
                  Back to Sets
                </button>
                <button 
                  onClick={() => {
                    setCurrentCardIndex(0);
                    setShowAnswer(false);
                    setShowHint(false);
                    setSessionStats({ correct: 0, incorrect: 0, totalTime: 0, streak: 0, bestStreak: 0 });
                    setCardStartTime(Date.now());
                  }}
                  className="flex-1 bg-white/10 hover:bg-white/20 border border-white/20 text-white py-4 px-6 rounded-xl font-bold transition-all duration-300"
                >
                  Study Again
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="relative z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-6">
              <button 
                onClick={() => window.history.back()}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <ArrowLeft className="h-6 w-6" />
              </button>
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 rounded-xl blur opacity-75"></div>
                  <div className={`relative bg-gradient-to-r ${studySet.color} p-2 rounded-xl`}>
                    <Brain className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white">{studySet.title}</h1>
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <span>{studySet.category}</span>
                    <span>•</span>
                    <span className={`px-2 py-1 rounded text-xs ${getDifficultyColor(studySet.difficulty.toLowerCase())}`}>
                      {studySet.difficulty}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Session Controls */}
              <div className="flex items-center space-x-2 bg-white/5 border border-white/10 rounded-xl px-4 py-2">
                <Clock className="h-4 w-4 text-blue-400" />
                <span className="text-white font-mono">{formatTime(sessionStats.totalTime)}</span>
              </div>
              
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className={`p-3 rounded-xl transition-all duration-300 ${
                  isPlaying 
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white' 
                    : 'bg-white/10 border border-white/20 text-white hover:bg-white/20'
                }`}
              >
                {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="relative z-10 bg-black/20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-400">
              Card {currentCardIndex + 1} of {cards.length}
            </span>
            <span className="text-sm font-bold text-white">{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-2">
            <div 
              className="h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Study Session */}
      <main className="relative z-10 max-w-4xl mx-auto px-6 py-12">
        
        {/* Stats Row */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm">
            <div className="flex items-center space-x-2 mb-1">
              <CheckCircle className="h-4 w-4 text-green-400" />
              <span className="text-xs text-gray-400">Correct</span>
            </div>
            <span className="text-2xl font-bold text-green-400">{sessionStats.correct}</span>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm">
            <div className="flex items-center space-x-2 mb-1">
              <XCircle className="h-4 w-4 text-red-400" />
              <span className="text-xs text-gray-400">Incorrect</span>
            </div>
            <span className="text-2xl font-bold text-red-400">{sessionStats.incorrect}</span>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm">
            <div className="flex items-center space-x-2 mb-1">
              <Zap className="h-4 w-4 text-yellow-400" />
              <span className="text-xs text-gray-400">Streak</span>
            </div>
            <span className="text-2xl font-bold text-yellow-400">{sessionStats.streak}</span>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm">
            <div className="flex items-center space-x-2 mb-1">
              <TrendingUp className="h-4 w-4 text-blue-400" />
              <span className="text-xs text-gray-400">Best</span>
            </div>
            <span className="text-2xl font-bold text-blue-400">{sessionStats.bestStreak}</span>
          </div>
        </div>

        {/* Study Card */}
        <div className="relative">
          <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-12 backdrop-blur-xl shadow-2xl shadow-black/20 min-h-[400px] flex flex-col justify-center">
            
            {/* Card Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-xl bg-gradient-to-r ${studySet.color}`}>
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <div>
                  <span className="text-sm text-gray-400">Question</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-white font-medium">#{currentCard.id}</span>
                    <span className={`px-2 py-1 rounded text-xs ${getDifficultyColor(currentCard.difficulty)}`}>
                      {currentCard.difficulty}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setShowHint(!showHint)}
                  className="bg-white/10 hover:bg-white/20 border border-white/20 text-white p-2 rounded-xl transition-all duration-300"
                  title="Show hint"
                >
                  <Lightbulb className="h-4 w-4" />
                </button>
                <button className="bg-white/10 hover:bg-white/20 border border-white/20 text-white p-2 rounded-xl transition-all duration-300">
                  <Volume2 className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Card Content */}
            <div className="flex-1 flex flex-col justify-center">
              {!showAnswer ? (
                <div className="text-center">
                  <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6 leading-relaxed">
                    {currentCard.front}
                  </h2>
                  
                  {showHint && (
                    <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-xl p-4 mb-6 max-w-md mx-auto">
                      <div className="flex items-center space-x-2 mb-2">
                        <Lightbulb className="h-4 w-4 text-yellow-400" />
                        <span className="text-sm font-bold text-yellow-400">Hint</span>
                      </div>
                      <p className="text-yellow-300 text-sm">{currentCard.hint}</p>
                    </div>
                  )}

                  <button
                    onClick={toggleAnswer}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25"
                  >
                    <Eye className="inline-block w-5 h-5 mr-2" />
                    Show Answer
                  </button>
                </div>
              ) : (
                <div className="text-center">
                  <div className="bg-green-400/10 border border-green-400/20 rounded-2xl p-8 mb-8">
                    <div className="flex items-center justify-center space-x-2 mb-4">
                      <Sparkles className="h-5 w-5 text-green-400" />
                      <span className="text-sm font-bold text-green-400">Answer</span>
                    </div>
                    <p className="text-white text-lg leading-relaxed">
                      {currentCard.back}
                    </p>
                  </div>

                  <div className="text-center">
                    <p className="text-gray-400 mb-6">How well did you know this?</p>
                    <div className="flex justify-center space-x-4">
                      <button
                        onClick={() => handleCardAnswer(false)}
                        className="bg-red-500/20 hover:bg-red-500/30 border border-red-500/40 text-red-300 px-6 py-3 rounded-xl font-bold transition-all duration-300 hover:scale-105"
                      >
                        <XCircle className="inline-block w-5 h-5 mr-2" />
                        Didn't Know
                      </button>
                      <button
                        onClick={() => handleCardAnswer(true)}
                        className="bg-green-500/20 hover:bg-green-500/30 border border-green-500/40 text-green-300 px-6 py-3 rounded-xl font-bold transition-all duration-300 hover:scale-105"
                      >
                        <CheckCircle className="inline-block w-5 h-5 mr-2" />
                        Got It!
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center mt-8">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => {
                if (currentCardIndex > 0) {
                  setCurrentCardIndex(prev => prev - 1);
                  setShowAnswer(false);
                  setShowHint(false);
                  setCardStartTime(Date.now());
                }
              }}
              disabled={currentCardIndex === 0}
              className="bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed border border-white/20 text-white p-3 rounded-xl transition-all duration-300"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            
            <span className="text-gray-400 px-4">
              {currentCardIndex + 1} / {cards.length}
            </span>
            
            <button
              onClick={() => {
                if (currentCardIndex < cards.length - 1) {
                  setCurrentCardIndex(prev => prev + 1);
                  setShowAnswer(false);
                  setShowHint(false);
                  setCardStartTime(Date.now());
                }
              }}
              disabled={currentCardIndex === cards.length - 1}
              className="bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed border border-white/20 text-white p-3 rounded-xl transition-all duration-300"
            >
              <SkipForward className="h-5 w-5" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}