import { XCircle, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Popup({ popupCont, setPopupCont }) {
  return (
    <AnimatePresence>
      {popupCont && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center bg-black/90 backdrop-blur-sm z-50"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-6 max-w-sm w-full shadow-2xl"
          >
            <div className="flex items-start space-x-3">
              {popupCont === "Successful registration" ? (
                <CheckCircle className="w-6 h-6 text-green-400 mt-1" />
              ) : (
                <XCircle className="w-6 h-6 text-red-400 mt-1" />
              )}
              <div className="flex-1">
                <h3 className="text-white font-bold text-lg">
                  {popupCont==="Successful registration"? 
                  "Success":"Action Failed"}
                  </h3>
                <p className="text-gray-300 mt-1">{popupCont}</p>
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setPopupCont(null)}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:from-blue-400 hover:to-purple-500 transition-all"
              >
                Đóng
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
