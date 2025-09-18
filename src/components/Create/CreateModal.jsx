import { X, Upload, Link, Camera, File, } from "lucide-react";
import { useState } from "react";
import { Create } from "../../services/CreateFunc";
import { useAIcontent } from "../../context/AISummaryContext";
import { useNavigate } from "react-router-dom";
import { Loading } from "../LoadingUI/Loading";
function CreateModal({setShowCreateModal, show}){
  const createMethods = [
        {
          id: 'Document',
          title: 'Upload Document',
          file: '.docx, .pdf',
          description: 'Generate cards from PDF, Word, or text files',
          icon: Upload,
          color: 'from-green-500 to-cyan-600'
        },
        {
          id: 'URL',
          title: 'From Website',
          description: 'Extract content from web pages',
          file: 'link',
          icon: Link,
          color: 'from-orange-500 to-red-600'
        },
        {
          id: 'Image',
          title: 'Scan Image',
          description: 'Extract text from photos or screenshots',
          file: 'JPG, PNG',
          icon: Camera,
          color: 'from-teal-500 to-blue-600'
        }
  ];
  const navigate = useNavigate();
  const [newSet, setNewSet] = useState({title: ''});
  const [createMethod, setCreateMethod] = useState(createMethods[0]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const {setAIsummaryContent} = useAIcontent();
  const handleCreateSet = async () => {
    try{
      setIsLoading(true);
      let result;
      setShowCreateModal(false);
      if (createMethod.id === "URL") {
        result = await Create("url", "");
      } else if (createMethod.id === "Document") {
        result = await Create(document, newSet.title);
      } else {
        result = await Create(image, newSet.title);
      }
      (result) ? setAIsummaryContent(result) : alert('Error');
    }
    catch(err){
      setError(err.message);
    }
    finally{
      setIsLoading(false);
      navigate("/sets/study/1");
    }
  };

  //Upload Image or Document
  const [image, setImage] = useState(null);
  const [document, setDocument] = useState(null);
  return (
    <>
    <div
        className={`fixed inset-0 z-50 p-4 items-center justify-center ${
          show  ? "flex" : "hidden"
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={() => setShowCreateModal(false)}
        ></div>
        
        {/* Modal Content */}
        <div className="relative bg-gradient-to-br from-gray-900/95 to-black/95 border border-white/10 rounded-3xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto backdrop-blur-xl shadow-2xl">
          
          {/* Modal Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-black text-white mb-2">Create Study Set</h2>
              <p className="text-gray-400">Choose how you want to create your study materials</p>
            </div>
            <button
              onClick={() => setShowCreateModal(false)}
              className="text-gray-400 hover:text-white transition-colors p-2"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Creation Methods */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {createMethods.map((method) => {
              const IconComponent = method.icon;
              return (
                <button
                  key={method.id}
                  onClick={() => setCreateMethod(method)}
                  className={`p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
                    createMethod.id === method.id
                      ? 'border-blue-500 bg-blue-500/10'
                      : 'border-white/10 bg-white/5 hover:border-white/20'
                  }`}
                >
                  <div className={`bg-gradient-to-br ${method.color} p-4 rounded-2xl w-fit mx-auto mb-4`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{method.title}</h3>
                  <p className="text-sm text-gray-400">{method.description}</p>
                </button>
              );
            })}
          </div>

          {/* Basic Information Form */}
          <div className="space-y-6 mb-8">
            <div>
              <label className="block text-sm font-bold text-white mb-3">Study Set Title</label>
              <input
                type="text"
                value={newSet.title}
                onChange={(e) => setNewSet({...newSet, title: e.target.value})}
                placeholder="Enter study set title..."
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50"
              />
            </div>

            {(createMethod.id === 'Image' || createMethod.id === 'Document') && (
              <div>
                <label className="block text-sm font-bold text-white mb-3">
                  Upload {createMethod.id}
                </label>
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col items-center justify-center w-full h-50 border-2 border-dashed border-white/20 rounded-2xl cursor-pointer bg-white/5 hover:bg-white/10 transition overflow-auto">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <Upload className="text-white mb-2"/>
                      <p className="mb-2 text-sm text-gray-400">
                        <span className="font-semibold">Click to upload</span>
                      </p>
                    </div>

                    <input
                      type="file"
                      accept={createMethod.id === "Image" ? "image/*" : ".pdf,.doc,.docx"}
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files[0];
                        if (file) {
                          if (createMethod.id === "Image") {
                            setImage(URL.createObjectURL(file));
                          }
                          else{
                            setDocument(file);
                          }
                        }
                      }}
                    />

                    {/* Image Preview */}
                    {createMethod.id === "Image" && image && (
                      <img src={image} alt="preview" className="mt-3 mb-3 max-h-32 rounded-xl" />
                    )}

                    {/* Document Preview */}
                    {createMethod.id === "Document" && document && (
                      <div className="flex items-center mt-1 bg-white/10 p-3 rounded-xl w-11/12 mb-5">
                        <File className="text-white"/>
                        <span className="text-sm text-gray-200 truncate">{document.name}</span>
                      </div>
                    )}
                  </label>
                </div>
              </div>
            )}

            {createMethod.id === 'URL' &&<div>
              <label className="block text-sm font-bold text-white mb-3">Paste URL</label>
              <input
                type="text"
                value={newSet.title}
                onChange={(e) => setNewSet({...newSet, title: e.target.value})}
                placeholder="Paste and upload your links"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50"
              />
            </div>}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end space-x-4">
            <button
              onClick={() => setShowCreateModal(false)}
              className="px-6 py-3 text-gray-400 hover:text-white transition-colors font-bold"
            >
              Cancel
            </button>
            <button
              onClick={()=>handleCreateSet()}
              disabled={!newSet.title.trim()|| 
                        (createMethod.id === 'Document' && !document) ||
                        (createMethod.id === 'Image' && !image)}
              className="bg-gradient-to-r from-blue-600 to-purple-600
                hover:from-blue-500 hover:to-purple-500 disabled:from-gray-600 disabled:to-gray-700 disabled:opacity-50 text-white px-8 py-3 rounded-xl font-bold transition-all duration-100 shadow-lg disabled:cursor-not-allowed"
            >
              Create Study Set
            </button>
          </div>

        </div>
      </div>
      {isLoading && <Loading LoadingText={"AI is generating Study Set"} />}
    </>
  )
}
export default CreateModal;