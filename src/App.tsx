
import './App.css';
import "./styles/general.scss";
import { Provider } from 'react-redux';
import {store } from './redux';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import { withSuspense } from './hoc/withSuspense';
import  PageLayout from './partials/PageLayout/PageLayout';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal, useMsalAuthentication } from '@azure/msal-react';
import { useEffect, useState } from 'react';
import { AccountInfo, InteractionType } from '@azure/msal-browser';
import MainMenu from './partials/MainMenu/MainMenu';
import Banner from './partials/Banner/Banner';

const SuspenseTodoContainer = withSuspense(
  () => import("./pages/Todo/index")
); 

const SuspenseEditTodoContainer = withSuspense(
  () => import("./pages/Todo/EditContainer/index")
);


const SuspenseTodoStatsContainer = withSuspense(
  () => import("./pages/Stats/index")
);

const SuspenseAboutContainer = withSuspense(
  () => import("./pages/About")
);

const SuspenseErrorContainer =withSuspense(
  () => import("./pages/Errors/InternalErrorException")
);



function App() {

  useMsalAuthentication(InteractionType.Redirect);
  const {instance,accounts} = useMsal();
  
  
  useEffect(()=>{
    if(accounts.length>0){
      instance.setActiveAccount(accounts[0]);
    }
  },[accounts]);


  return <>
      <UnauthenticatedTemplate>
        <>
          <p >You are not signed in!</p>
        </>
    </UnauthenticatedTemplate>
    <AuthenticatedTemplate>
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <Provider store={store}>
              <div style={{width: '100%', height: '100%', background: '#D9D9D9'}} >
                {/* <Header></Header> */}
                {/* <Menu></Menu> */}
                <Banner></Banner>
                <MainMenu></MainMenu>
                <PageLayout >
                      <Routes>
                        <Route path="/"  element={
                          <>
                            {SuspenseTodoContainer}
                            {SuspenseEditTodoContainer}
                          </>
                        }></Route>
                        <Route path='/system' element={SuspenseTodoStatsContainer}></Route>
                        <Route path='/about' element={SuspenseAboutContainer}></Route>
                        <Route path='/error' element={SuspenseErrorContainer}></Route>
                      </Routes>
                </PageLayout>
              </div>
          </Provider>
        </BrowserRouter>
      </I18nextProvider> 
    </AuthenticatedTemplate>

  </>
}

export default App;
