export const logout = async (req, res) => {
  // Clears the token
  res.cookie("token", "", { expires: new Date(0) });
  res.status(200).json({ message: "Logged out" });
};
