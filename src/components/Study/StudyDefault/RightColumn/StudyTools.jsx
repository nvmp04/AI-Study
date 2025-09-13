import { Play, Target} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function StudyTools (){
    const navigate = useNavigate();
    return(
        <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-6 backdrop-blur-xl">
            <h3 className="text-lg font-bold text-white mb-4">Study Tools</h3>
            <div className="space-y-3">
            <button onClick={()=> navigate('/sets/study/:id/flashcard')}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white py-3 px-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                <Play className="h-5 w-5" />
                <span>Flashcards</span>
            </button>
            <button onClick={()=>navigate('/sets/study/:id/quiz')}
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white py-3 px-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                <Target className="h-5 w-5" />
                <span>Quiz</span>
            </button>
            </div>
        </div>
    )
}
export default StudyTools;