export const PROMPT_VISIBLE = "PROMPT_VISIBLE";

export const promptVisible = (value: boolean, msg: string) => {
  return {
    type: PROMPT_VISIBLE,
    value,
    msg
  };
};
