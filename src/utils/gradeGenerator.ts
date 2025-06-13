interface Grade {
  subject: string;
  score: number;
}

const subjects = [
  'الرياضيات', 'الفيزياء', 'الكيمياء', 'علوم الطبيعة والحياة',
  'اللغة العربية وآدابها', 'اللغة الإنجليزية', 'اللغة الفرنسية',
  'التاريخ والجغرافيا', 'العلوم الإسلامية', 'الفلسفة',
  'التربية البدنية', 'التربية المدنية', 'الأمازيغية',
  'المحاسبة والمالية', 'الاقتصاد والمناجمنت', 'القانون',
  'الهندسة المدنية', 'الهندسة الميكانيكية', 'الهندسة الكهربائية',
  'الإعلام الآلي', 'الجيولوغيا', 'علم النفس', 'علم الاجتماع',
  'الأدب العربي', 'الأدب الفرنسي', 'الموسيقى', 'الرسم',
  'تكنولوجيا المعلومات', 'الإحصاء', 'الكيمياء التطبيقية',
  'الفيزياء التطبيقية', 'الرياضيات التطبيقية', 'علوم المواد',
  'الهندسة المعمارية', 'التصميم الصناعي', 'الزراعة',
  'البيطرة', 'الصيدلة', 'الطب', 'طب الأسنان',
  'العلوم السياسية', 'الإعلام والاتصال', 'السياحة والفندقة',
  'التجارة الدولية', 'إدارة الأعمال', 'التسويق'
];

export const generateRandomGrades = (): Grade[] => {
  const grades: Grade[] = [];
  const shuffledSubjects = [...subjects].sort(() => Math.random() - 0.5);
  
  // Generate grades according to the specified distribution
  let gradeIndex = 0;
  
  // 2 grades with value 13
  for (let i = 0; i < 2; i++) {
    grades.push({
      subject: shuffledSubjects[gradeIndex++],
      score: 13 + Math.random() * 0.99 // 13.xx
    });
  }
  
  // 5 grades with value 14
  for (let i = 0; i < 5; i++) {
    grades.push({
      subject: shuffledSubjects[gradeIndex++],
      score: 14 + Math.random() * 0.99 // 14.xx
    });
  }
  
  // 9 grades with value 15
  for (let i = 0; i < 9; i++) {
    grades.push({
      subject: shuffledSubjects[gradeIndex++],
      score: 15 + Math.random() * 0.99 // 15.xx
    });
  }
  
  // 15 grades with value 16
  for (let i = 0; i < 15; i++) {
    grades.push({
      subject: shuffledSubjects[gradeIndex++],
      score: 16 + Math.random() * 0.99 // 16.xx
    });
  }
  
  // 14 grades with value 17 (less than 0.5 decimal)
  for (let i = 0; i < 14; i++) {
    grades.push({
      subject: shuffledSubjects[gradeIndex++],
      score: 17 + Math.random() * 0.49 // 17.0x to 17.4x
    });
  }
  
  // 3 grades with value 18
  for (let i = 0; i < 3; i++) {
    grades.push({
      subject: shuffledSubjects[gradeIndex++],
      score: 18 + Math.random() * 0.99 // 18.xx
    });
  }
  
  // Shuffle the final grades array
  return grades.sort(() => Math.random() - 0.5);
};

export const calculateAverageAndAppreciation = (grades: Grade[]) => {
  const average = grades.reduce((sum, grade) => sum + grade.score, 0) / grades.length;
  
  let appreciation: string;
  if (average >= 16) {
    appreciation = 'جيد جداً';
  } else if (average >= 14) {
    appreciation = 'جيد';
  } else {
    appreciation = 'مقبول';
  }
  
  return { average, appreciation };
};