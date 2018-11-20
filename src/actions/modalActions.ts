export const MODAL_VISIBLE = "MODAL_VISIBLE";

export const modalVisible = (value: boolean) => {
  return {
    type: MODAL_VISIBLE,
    value
  };
};
