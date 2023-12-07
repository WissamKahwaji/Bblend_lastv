// export const createFormData = (data) => {
//   let formData = new FormData();
//   console.log(data);
//   for (const [key, value] of Object.entries(data)) {
//     if (value === undefined || value === null) continue;

//     if (Array.isArray(value)) {
//       for (const item of value) {
//         formData.append(`${key}[]`, item);
//       }
//     } else formData.append(key, value);
//   }
//   return formData;
// };
export const createFormData = (data) => {
  const formData = new FormData();

  const appendToFormData = (obj, parentKey) => {
    Object.keys(obj).forEach((key) => {
      const value = obj[key];
      const formKey = parentKey ? `${parentKey}[${key}]` : key;

      if (
        typeof value === "object" &&
        value !== null &&
        !(value instanceof File)
      ) {
        appendToFormData(value, formKey); // Recursively process nested objects
      } else {
        formData.append(formKey, value);
      }
    });
  };

  appendToFormData(data);

  return formData;
};
