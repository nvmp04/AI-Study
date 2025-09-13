import { createContext, useState } from 'react';
import Introduction from './LeftColumn/StudyContent/Introduction';
import Core from './LeftColumn/StudyContent/Core';
import Notes from './LeftColumn/StudyContent/Notes';
import Applications from './LeftColumn/StudyContent/Applications';
import StudyHeader from './Header/Header';
import TabNav from './LeftColumn/TabNav';
import PDFcontent from './LeftColumn/StudyContent/PDFcontent';
import StudyTools from './RightColumn/StudyTools';

export const contentContext = createContext();
function ContentProvider({children}){
  const aiSummaryContent = {
    introduction: `Khóa học này cung cấp kiến thức và các bước cơ bản về đánh giá hiệu suất hệ thống máy tính, bao gồm các chỉ số hiệu suất, phân tích định lượng, thiết kế thực nghiệm và mô phỏng. Mục tiêu là trang bị cho sinh viên khả năng xác định yêu cầu hiệu suất, đặc tả tải hệ thống, xác định nút thắt cổ chai, lên kế hoạch công suất và đánh giá các phương án thiết kế.`,

    coreKnowledge: [
      {
        title: "Monitoring examples",
        content: "Các ví dụ về giám sát hệ thống và thu thập dữ liệu hiệu suất"
      },
      {
        title: "Basic concepts",
        content: "Hiểu về khái niệm Performance và cách đo lường hiệu suất hệ thống"
      },
      {
        title: "Course overview", 
        content: "Tổng quan về môn học và các chủ đề chính sẽ được học"
      },
      {
        title: "Case study",
        content: "Supply chain by queuing network, Shortest path algorithms, 'Just in time' và performance evaluation"
      },
      {
        title: "Hiệu suất của một hệ thống",
        content: "Liên quan đến các yếu tố như thời gian phản hồi trung bình, thông lượng và cách chúng bị ảnh hưởng bởi các thay đổi trong hệ thống."
      },
      {
        title: "Độ trễ (thời gian)",
        content: "Thời gian cần thiết để hoàn thành một công việc."
      },
      {
        title: "Thông lượng (tốc độ)",
        content: "Số lượng công việc hoàn thành trong một đơn vị thời gian."
      }
    ],

    notes: [
      "Đặt ra các câu hỏi về thời gian hoàn thành công việc, thông lượng, và tác động của việc tăng tải hoặc thay đổi cấu hình hệ thống."
    ],

    applications: [
      "Xác định yêu cầu hiệu suất trong thiết kế hệ thống.",
      "Đặc tả tải hệ thống thực tế.",
      "Phát hiện và xử lý nút thắt cổ chai.",
      "Lập kế hoạch công suất và đánh giá phương án thiết kế."
    ]
  };
  return(
    <contentContext.Provider value={{aiSummaryContent}}>
      {children}
    </contentContext.Provider>
  )
}
export default function AIStudyInterface() {
  const [activeTab, setActiveTab] = useState('ai-summary');
  
  const documentInfo = {
    title: "Đánh Giá Hiệu Suất Hệ Thống Máy Tính",
    subtitle: "Performance Evaluation of Computer Systems",
    author: "Trần Văn Hoài",
    university: "HCMC University of Technology",
    semester: "2024-2025/Semester 1",
    pages: 63,
    lastModified: "2025/09/08 14:42"
  };
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <StudyHeader documentInfo={documentInfo}/>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2">
            
            {/* Tab Navigation */}
            <TabNav activeTab={activeTab} setActiveTab={setActiveTab}/>

            {/* Tab Content */}
            <div className="min-h-[600px]">
              {activeTab === 'ai-summary' ? (
                <div className="space-y-8">
                  <ContentProvider>
                    {/* Document Overview */}
                    <Introduction/>

                    {/* Core Concepts */}
                    <Core/>

                    {/* Note*/}
                    <Notes/>

                    {/*Application*/}
                    <Applications/>
                  </ContentProvider>
                </div>
              ) : (
                /* Original PDF Content */
                <PDFcontent documentInfo = {documentInfo}/>
              )}
            </div>
          </div>

          {/* Right Column - Actions & Info */}
          <div className="space-y-6">
            
            {/* Quick Actions */}
            <StudyTools/>

            {/* Study Progress */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-6 backdrop-blur-xl">
              <h3 className="text-lg font-bold text-white mb-4">Study Progress</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400">Overall Progress</span>
                    <span className="text-white">0%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div className="h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full" style={{ width: '0%' }}></div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">0</div>
                    <div className="text-xs text-gray-400">Cards Studied</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">0</div>
                    <div className="text-xs text-gray-400">Quiz Score</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}