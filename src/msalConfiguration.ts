import { Configuration, LogLevel, PublicClientApplication, SilentRequest } from "@azure/msal-browser";

const msalConfig : Configuration = {
    auth:{
        clientId:"1043da80-c228-4135-9df6-7bfb1a61e52b",
        authority:`https://login.microsoftonline.com/cf79f7ff-2b29-444e-b5fa-8f772cc29b3a`,
        postLogoutRedirectUri: "/", // Indicates the page to navigate after logout.
        navigateToLoginRequestUrl: false, // If "true", will navigate back to the original request location before processing the auth code response.
    },
    cache:{
        cacheLocation: "sessionStorage", // Configures cache location. "sessionStorage" is more secure, but "localStorage" gives you SSO between tabs.
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    }
}




export const pca = new PublicClientApplication(msalConfig);
//"https://graph.microsoft.com/profile","https://graph.microsoft.com/Group.Read.All","https://graph.microsoft.com/Group.ReadWrite.All"




// Access token request.
export const apiRequest:SilentRequest = {
    scopes: ['api://1043da80-c228-4135-9df6-7bfb1a61e52b/access_to_apis'],
    // scopes: ['api://7f4aeffd-e8fa-418e-a55a-9e34f3eafbd7/Api.Access.Client'],
    forceRefresh: false 
}

export const graphRequest:SilentRequest = {
    scopes: ["https://graph.microsoft.com/User.Read"],
}; 



//this is a main function to get access token for each calling api.
export const getToken = async (Request:SilentRequest) => {    
    try {
      const response = await pca.acquireTokenSilent(Request);
      console.log(response);
      console.log(response.accessToken);
      return response.accessToken;
    } catch (error) {
      // Handle authentication errors
      console.error(error);
      return null;
    }
};



export async function getGroups(token:string) {
    const endpoint = "https://graph.microsoft.com/v1.0/";
    try {
        const response = await fetch(endpoint, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Groups:", data);
        return data;
    } catch (error) {
        console.error("Error fetching groups:", error);
    }
}
