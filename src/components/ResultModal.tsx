import React from 'react';
import { Download, X, AlertTriangle } from 'lucide-react';

interface Grade {
  subject: string;
  score: number;
}

interface ResultData {
  firstName: string;
  lastName: string;
  specialization: string;
  averageScore: number;
  appreciation: string;
  grades: Grade[];
}

interface ResultModalProps {
  result: ResultData;
  onClose: () => void;
  onDownload: () => void;
}

const ResultModal: React.FC<ResultModalProps> = ({ result, onClose, onDownload }) => {
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <p className="text-sm text-gray-600">النتيجة</p>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Right side - Student Information */}
            <div className="text-right">
              <h2 className="text-4xl font-bold text-green-600 mb-6">ألف مبروك</h2>
              <div className="space-y-3 text-lg">
                <p><span className="font-semibold">الاسم:</span> {result.firstName}</p>
                <p><span className="font-semibold">اللقب:</span> {result.lastName}</p>
                <p><span className="font-semibold">الشعبة:</span> {result.specialization}</p>
                <p><span className="font-semibold">النتيجة:</span> {result.averageScore.toFixed(2)}</p>
                <p><span className="font-semibold">التقدير:</span> 
                  <span className={`mr-2 px-3 py-1 rounded-full text-sm ${
                    result.appreciation === 'جيد جداً' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {result.appreciation}
                  </span>
                </p>
              </div>
            </div>

            {/* Left side - Grades Information */}
            <div>
              <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-4">
                <div className="flex items-center mb-3">
                  <AlertTriangle className="text-yellow-600 ml-2" size={20} />
                  <h3 className="font-bold text-yellow-800">هام جداً: كشوف النقاط</h3>
                </div>
                <p className="text-center text-yellow-700 font-medium text-lg">
                  في المنام ستجدها xDDDDDD
                </p>
              </div>
            </div>
          </div>

          <div className="flex space-x-4 justify-center mt-8">
            <button
              onClick={onDownload}
              className="flex items-center px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Download size={20} className="ml-2" />
              تحميل البطاقة
            </button>
            <button
              onClick={onClose}
              className="flex items-center px-6 py-3 bg-gray-600 text-white rounded-xl hover:bg-gray-700 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <X size={20} className="ml-2" />
              إغلاق الصفحة
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultModal;