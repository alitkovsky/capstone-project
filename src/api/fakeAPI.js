const generateRandomSlots = () => {
  const availableSlots = [];
  const currentDate = new Date();
  const periodOfDays = 30;

  for (let i = 0; i < periodOfDays; i++) {
    const date = new Date(currentDate);
    date.setDate(currentDate.getDate() + i);

    const times = [];
    const numberOfSlots = Math.floor(Math.random() * 6) + 1;

    for (let j = 0; j < numberOfSlots; j++) {
      const hours = Math.floor(Math.random() * 6) + 17;
      const minutes = Math.random() < 0.5 ? "00" : "30";

      const time = `${hours}:${minutes}`;
      times.push(time);
    }

    availableSlots.push({
      date: date.toISOString().split("T")[0],
      times
    });

    return availableSlots;
  }
};

const successfulSubmit = () => {
  return true;
};

const fetchAvailableSlots = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return generateRandomSlots();
};

const submitAPI = async (formData) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return successfulSubmit();
};

export { fetchAvailableSlots, submitAPI };