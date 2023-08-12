export function getFormData(
  formRef,
  module,
  setCurrentFormData,
  setQuestionData = null
) {
  if (formRef.current) {
    const formData = new FormData(formRef.current);

    let data = {};
    let counter = 0;
    let completedQuestions = 0;
    for (let [key, value] of formData.entries()) {
      // console.log(key + ": " + value);
      data[key] = value; // Construct the data object
      counter++;
      if (value !== "") {
        completedQuestions++;
      }
    }

    setCurrentFormData(data); // Update the state
    if (setQuestionData) {
      setQuestionData({
        completed_questions: completedQuestions,
        total_questions: module.total_questions,
      });
    }
    return data;
  }
}
