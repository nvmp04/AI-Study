import { InfoIcon } from "lucide-react";
import { useContext } from "react";
import { contentContext } from "../../Study";
function Notes(){
    const {aiSummaryContent} = useContext(contentContext)
    return (
        <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-8 backdrop-blur-xl">
            <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-2 rounded-xl">
                <InfoIcon className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">Lưu ý</h2>
            </div>
            <p className="text-white leading-relaxed text-lg">
                {aiSummaryContent.notes}
            </p>
        </div>
    )
}
export default Notes;