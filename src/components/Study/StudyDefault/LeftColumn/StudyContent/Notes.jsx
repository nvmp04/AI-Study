import { InfoIcon } from "lucide-react";
import { useAIcontent } from "../../../../../context/AISummaryContext";
function Notes(){
    const {aiSummaryContent} = useAIcontent();
    return (
        <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-8 backdrop-blur-xl">
            <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-2 rounded-xl">
                <InfoIcon className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">Lưu ý</h2>
            </div>
            <div className="space-y-6">
                {aiSummaryContent.notes.map((component, index) => (
                    <div>
                        <p className="text-white leading-relaxed text-lg">
                        {component} 
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Notes;