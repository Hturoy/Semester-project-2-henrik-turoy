export const findIndex = (array, item) => {
    return array
      .map((item) => {
        return item.id;
      })
      .indexOf(item.id);

  };
  