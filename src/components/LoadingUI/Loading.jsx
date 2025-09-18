import { Brain, Sparkles } from 'lucide-react';

 export function Loading({LoadingText}){
  return (
    <div className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-6">
        {/* Brain Icon */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur-xl opacity-60 animate-pulse"></div>
          <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-3xl">
            <Brain className="h-12 w-12 text-white" />
          </div>
        </div>

        {/* Brand */}
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Sparkles className="h-4 w-4 text-yellow-400" />
          <span className="text-yellow-400 font-semibold text-sm">StudyAI Pro</span>
        </div>

        {/* Loading Text */}
        <h2 className="text-xl font-semibold text-white mb-8">
          {LoadingText}
        </h2>

        {/* Linear Progress Bar - tham khảo Material-UI */}
        <div className="w-full">
          <div className="bg-gray-800 rounded-full h-1 overflow-hidden relative">
            {/* Indeterminate animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-indeterminate"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes indeterminate {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(400%);
          }
        }
        @keyframes breathing {
          0%, 100% {
            transform: scale(1);
            opacity: 0.4;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.8;
          }
        }
        @keyframes breathing-slow {
          0%, 100% {
            transform: scale(1);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.9;
          }
        }
        .animate-indeterminate {
          animation: indeterminate 2s infinite ease-in-out;
        }
        .animate-breathing {
          animation: breathing 3s infinite ease-in-out;
        }
        .animate-breathing-slow {
          animation: breathing-slow 4s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};
