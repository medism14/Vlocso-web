import { FormValuesChangePasswordProfile } from "./useMotDePasse";
import { API_ENDPOINTS } from "../../../https"; // Import the endpoints

export const handleChangePasswordProfile = async (
  values: FormValuesChangePasswordProfile
) => {
  try {
    const response = await fetch(API_ENDPOINTS.CHANGE_PASSWORD_PROFILE, {
      // Use the endpoint
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    return {
      success: true,
      message: "Password changed successfully.",
      data,
    };
  } catch (error) {
    return {
      success: false,
      message: "Failed to change password. Please try again.",
      error,
    };
  }
};