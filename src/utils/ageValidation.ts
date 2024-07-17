export const isAgeWithinRange = (
    birthDate: string | Date,
    minAllowedAge: number = 18,
    maxAllowedAge: number = 120,
  ): boolean => {
    const parsedBirthDate = new Date(birthDate);
    if (isNaN(parsedBirthDate.getTime())) return false; 
  
    const currentDate = new Date();
    const calculatedAge = currentDate.getFullYear() - parsedBirthDate.getFullYear();
    const isWithinAgeRange = calculatedAge >= minAllowedAge && calculatedAge <= maxAllowedAge;
  
    // Проверка если день и месяц рождения еще не прошли в текущем году
    if (calculatedAge === minAllowedAge || calculatedAge === maxAllowedAge) {
      const monthDifference = currentDate.getMonth() - parsedBirthDate.getMonth();
      const dayDifference = currentDate.getDate() - parsedBirthDate.getDate();
      if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        return calculatedAge - 1 >= minAllowedAge;
      }
    }
  
    return isWithinAgeRange;
  };