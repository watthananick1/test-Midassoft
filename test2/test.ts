function getQuestionPart(phrases: string[]): string[] {
    let commonWord = '';
    for (let i = 0; i < phrases[0].length; i++) {
        let char = phrases[0][i];
        let isCommon = true;
        for (let j = 1; j < phrases.length; j++) {
            if (phrases[j].indexOf(char) === -1) {
                isCommon = false;
                break;
            }
        }
        if (isCommon) {
            commonWord += char;
        } 
    }
    console.log('commonWord', commonWord)

    const questionParts = phrases.map(phrase => phrase.replace(commonWord, ""));
  
    return questionParts;
}

export { getQuestionPart };

