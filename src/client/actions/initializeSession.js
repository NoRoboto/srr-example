const INITIALIZE_SESSION = "INITIALIZE_SESSION";

export {
  INITIALIZE_SESSION,
};

export const initializeSession = () => ({
  action: "initializeSession", type: INITIALIZE_SESSION,
});
