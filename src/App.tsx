import React, { useState } from 'react';
import AlgerianFlag from './components/AlgerianFlag';
import GradientBackground from './components/GradientBackground';
import StudentForm from './components/StudentForm';
import ResultModal from './components/ResultModal';
import { generateRandomGrades, calculateAverageAndAppreciation } from './utils/gradeGenerator';

interface FormData {
  firstName: string;
  lastName: string;
  specialization: string;
  registrationNumber: string;
  secretNumber: string;
}

interface ResultData {
  firstName: string;
  lastName: string;
  specialization: string;
  averageScore: number;
  appreciation: string;
  grades: Array<{ subject: string; score: number }>;
}

function App() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ResultData | null>(null);

  const handleFormSubmit = async (formData: FormData) => {
    setLoading(true);
    
    // Simulate loading time
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Generate random grades
    const grades = generateRandomGrades();
    const { average, appreciation } = calculateAverageAndAppreciation(grades);
    
    const resultData: ResultData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      specialization: formData.specialization,
      averageScore: average,
      appreciation,
      grades
    };
    
    setResult(resultData);
    setLoading(false);
  };

  const handleCloseResult = () => {
    setResult(null);
  };

  const handleDownloadResult = () => {
    // Create a comprehensive HTML document for download
    const htmlContent = `
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>نتيجة البكالوريا - ${result?.firstName} ${result?.lastName}</title>
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700&display=swap" rel="stylesheet">
    <style>
        * { font-family: 'Cairo', sans-serif; }
        body { 
            margin: 0; 
            padding: 20px; 
            background: linear-gradient(135deg, #10b981, #059669);
            min-height: 100vh;
            direction: rtl;
        }
        .container { 
            max-width: 800px; 
            margin: 0 auto; 
            background: white; 
            border-radius: 20px; 
            padding: 40px; 
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        .header { 
            text-align: center; 
            margin-bottom: 40px; 
            border-bottom: 3px solid #10b981; 
            padding-bottom: 20px;
        }
        .title { 
            color: #10b981; 
            font-size: 2.5rem; 
            font-weight: bold; 
            margin-bottom: 10px;
        }
        .subtitle { 
            color: #6b7280; 
            font-size: 1.2rem;
        }
        .info-section { 
            margin-bottom: 30px;
        }
        .info-row { 
            display: flex; 
            justify-content: space-between; 
            padding: 15px 0; 
            border-bottom: 1px solid #e5e7eb;
        }
        .info-label { 
            font-weight: bold; 
            color: #374151;
        }
        .info-value { 
            color: #10b981; 
            font-weight: 600;
        }
        .appreciation { 
            background: #dcfce7; 
            color: #166534; 
            padding: 8px 16px; 
            border-radius: 20px; 
            font-weight: bold;
        }
        .warning-box { 
            background: #fef3c7; 
            border: 2px solid #f59e0b; 
            border-radius: 15px; 
            padding: 20px; 
            margin-top: 30px; 
            text-align: center;
        }
        .warning-title { 
            color: #92400e; 
            font-weight: bold; 
            font-size: 1.3rem; 
            margin-bottom: 10px;
        }
        .warning-text { 
            color: #92400e; 
            font-size: 1.1rem; 
            font-weight: 600;
        }
        .footer { 
            text-align: center; 
            margin-top: 40px; 
            padding-top: 20px; 
            border-top: 2px solid #e5e7eb; 
            color: #6b7280;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1 class="title">نتائج شهادة البكالوريا 2025</h1>
            <p class="subtitle">الجمهورية الجزائرية الديمقراطية الشعبية</p>
        </div>
        
        <div class="info-section">
            <div class="info-row">
                <span class="info-label">الاسم:</span>
                <span class="info-value">${result?.firstName}</span>
            </div>
            <div class="info-row">
                <span class="info-label">اللقب:</span>
                <span class="info-value">${result?.lastName}</span>
            </div>
            <div class="info-row">
                <span class="info-label">الشعبة:</span>
                <span class="info-value">${result?.specialization}</span>
            </div>
            <div class="info-row">
                <span class="info-label">المعدل العام:</span>
                <span class="info-value">${result?.averageScore.toFixed(2)}</span>
            </div>
            <div class="info-row">
                <span class="info-label">التقدير:</span>
                <span class="appreciation">${result?.appreciation}</span>
            </div>
        </div>

        <div class="warning-box">
            <div class="warning-title">هام جداً: كشوف النقاط</div>
            <div class="warning-text">في المنام ستجدها xDDDDDD</div>
        </div>

        <div class="footer">
            <p>ملاحظة: هذه النتائج وهمية لأغراض التجربة فقط</p>
            <p>تم إنشاؤها من طرف Askeladd</p>
        </div>
    </div>
</body>
</html>`;
    
    const element = document.createElement('a');
    const file = new Blob([htmlContent], { type: 'text/html' });
    element.href = URL.createObjectURL(file);
    element.download = `نتيجة_البكالوريا_${result?.firstName}_${result?.lastName}.html`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="min-h-screen relative overflow-hidden font-['Cairo']">
      <GradientBackground />
      
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4">
        <div className="text-center mb-8">
          <AlgerianFlag />
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-2xl">
            نتائج شهادة البكالوريا 2025
          </h1>
          <p className="text-lg text-white/90 mb-2 drop-shadow-lg">
            (غير حقيقي)
          </p>
          <p className="text-xl text-white font-semibold drop-shadow-lg">
            يتمنى لكم Askeladd النجاح في البكالوريا
          </p>
        </div>

        <StudentForm onSubmit={handleFormSubmit} loading={loading} />
      </div>

      {result && (
        <ResultModal
          result={result}
          onClose={handleCloseResult}
          onDownload={handleDownloadResult}
        />
      )}
    </div>
  );
}

export default App;