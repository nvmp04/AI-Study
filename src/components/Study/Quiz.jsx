import { useState, useEffect } from "react";
import { 
  Brain, ArrowLeft, Clock, Play, Pause,
  CheckCircle, XCircle, Zap, TrendingUp,
  Award, Star
} from "lucide-react";
import { Background } from "../../App";

export default function Quiz() {
  const studySet = {
    id: 1,
    title: "Advanced React Patterns - Quiz",
    description: "Test your knowledge of advanced React patterns",
    color: "from-blue-500 to-purple-600",
    difficulty: "Advanced",
    category: "Frontend",
  };

  const questions = [
    {
      id: 1,
      question: "What is React.memo() used for?",
      options: [
        "To memoize functions",
        "To prevent unnecessary re-renders",
        "To fetch data efficiently",
        "To manage global state",
      ],
      answer: 1,
      difficulty: "medium",
    },
    {
      id: 2,
      question: "Which hook is best for memoizing functions?",
      options: ["useEffect", "useState", "useCallback", "useRef"],
      answer: 2,
      difficulty: "hard",
    },
    {
      id: 3,
      question: "What is the Compound Component pattern?",
      options: [
        "Sharing logic via functions",
        "Components working as a family",
        "Global state management",
        "Styling components consistently",
      ],
      answer: 1,
      difficulty: "easy",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [stats, setStats] = useState({
    correct: 0,
    incorrect: 0,
    streak: 0,
    bestStreak: 0,
    totalTime: 0,
  });
  const [showResult, setShowResult] = useState(false);
  const [sessionStart] = useState(Date.now());

  const currentQ = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;

  useEffect(() => {
    let interval = setInterval(() => {
        setStats(prev => ({
          ...prev,
          totalTime: Math.floor((Date.now() - sessionStart) / 1000),
        }));
      }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSelect = (idx) => {
    if (selected !== null) return;
    setSelected(idx);

    const isCorrect = idx === currentQ.answer;
    setStats(prev => ({
      ...prev,
      correct: isCorrect ? prev.correct + 1 : prev.correct,
      incorrect: !isCorrect ? prev.incorrect + 1 : prev.incorrect,
      streak: isCorrect ? prev.streak + 1 : 0,
      bestStreak: isCorrect && prev.streak + 1 > prev.bestStreak
        ? prev.streak + 1
        : prev.bestStreak,
    }));

    setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(i => i + 1);
        setSelected(null);
      } else {
        setShowResult(true);
      }
    }, 1500);
  };

  const formatTime = (sec) =>
    `${Math.floor(sec / 60)}:${String(sec % 60).padStart(2, "0")}`;

  // ===== Result Page =====
  if (showResult) {
    const accuracy = Math.round((stats.correct / (stats.correct + stats.incorrect)) * 100) || 0;

    return (
      <div className="min-h-screen bg-black">
        <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/10 to-cyan-900/20" />
        <div className="relative z-10 flex items-center justify-center min-h-screen p-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-12 backdrop-blur-xl">
              <div className="mb-8">
                <div className="relative mx-auto w-32 h-32">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse"></div>
                  <div className="relative bg-gradient-to-r from-green-500 to-emerald-600 rounded-full w-full h-full flex items-center justify-center">
                    <Award className="h-16 w-16 text-white" />
                  </div>
                </div>
              </div>
              <h1 className="text-4xl font-black text-white mb-4">Quiz Complete!</h1>
              <p className="text-xl text-gray-300 mb-8">You finished {studySet.title}</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="text-2xl font-bold text-green-400">{stats.correct}</div>
                  <div className="text-sm text-gray-400">Correct</div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="text-2xl font-bold text-red-400">{stats.incorrect}</div>
                  <div className="text-sm text-gray-400">Incorrect</div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="text-2xl font-bold text-blue-400">{accuracy}%</div>
                  <div className="text-sm text-gray-400">Accuracy</div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="text-2xl font-bold text-purple-400">{formatTime(stats.totalTime)}</div>
                  <div className="text-sm text-gray-400">Time</div>
                </div>
              </div>

              {stats.bestStreak >= 3 && (
                <div className="bg-gradient-to-r from-yellow-400/10 to-orange-400/10 border border-yellow-400/20 rounded-xl p-4 mb-8">
                  <div className="flex items-center justify-center space-x-2">
                    <Star className="h-6 w-6 text-yellow-400" />
                    <span className="text-lg font-bold text-yellow-400">
                      Best Streak: {stats.bestStreak} correct!
                    </span>
                  </div>
                </div>
              )}

              <button
                onClick={() => window.history.back()}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white py-4 px-6 rounded-xl font-bold transition-all duration-300 transform hover:scale-105"
              >
                Back to Sets
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ===== Quiz Page =====
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="relative z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-6">
              <button onClick={() => window.history.back()} className="text-gray-400 hover:text-white">
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
                    <span className="px-2 py-1 rounded text-xs bg-yellow-400/10 text-yellow-400">
                      {studySet.difficulty}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-white/5 border border-white/10 rounded-xl px-4 py-2">
                <Clock className="h-4 w-4 text-blue-400" />
                <span className="text-white font-mono">{formatTime(stats.totalTime)}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="relative z-10 bg-black/20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-400">
              Question {currentIndex + 1} of {questions.length}
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

      {/* Stats */}
      <div className="max-w-4xl mx-auto px-6 py-6 grid grid-cols-4 gap-4">
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <CheckCircle className="h-4 w-4 text-green-400" />
          <div className="text-2xl font-bold text-green-400">{stats.correct}</div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <XCircle className="h-4 w-4 text-red-400" />
          <div className="text-2xl font-bold text-red-400">{stats.incorrect}</div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <Zap className="h-4 w-4 text-yellow-400" />
          <div className="text-2xl font-bold text-yellow-400">{stats.streak}</div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <TrendingUp className="h-4 w-4 text-blue-400" />
          <div className="text-2xl font-bold text-blue-400">{stats.bestStreak}</div>
        </div>
      </div>

      {/* Question Card */}
      <main className="relative z-10 max-w-4xl mx-auto px-6 py-8">
        <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-10 backdrop-blur-xl shadow-2xl">
          <h2 className="text-2xl text-white font-bold mb-6">{currentQ.question}</h2>
          <div className="space-y-4">
            {currentQ.options.map((opt, idx) => {
              const isCorrect = idx === currentQ.answer;
              const isSelected = selected === idx;
              return (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  className={`w-full text-left px-6 py-4 rounded-xl border transition-all duration-300 ${
                    selected === null
                      ? "bg-white/10 border-white/20 hover:bg-white/20 text-white"
                      : isSelected && isCorrect
                      ? "bg-green-500/20 border-green-400 text-green-300"
                      : isSelected && !isCorrect
                      ? "bg-red-500/20 border-red-400 text-red-300"
                      : isCorrect
                      ? "bg-green-500/10 border-green-300/50 text-green-200"
                      : "bg-white/5 border-white/10 text-gray-400"
                  }`}
                >
                  {opt}
                </button>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
