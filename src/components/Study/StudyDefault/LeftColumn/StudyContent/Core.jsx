import { Target } from "lucide-react";
import { useContext } from "react";
import { contentContext } from "../../Study";
function Core(){
    const {aiSummaryContent} = useContext(contentContext)
    return(
        <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-8 backdrop-blur-xl">
            <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-2 rounded-xl">
                <Target className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">Kiến thức trọng tâm</h2>
            </div>
            <div className="space-y-6">
                {aiSummaryContent.coreKnowledge.map((component, index) => (
                    <div>
                        <p className="text-white leading-relaxed">
                        <strong className="text-lg font-bold text-white mb-2">{component.title}: </strong>
                        {component.content}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Core;