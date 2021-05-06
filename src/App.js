import React, {useEffect} from 'react'
import HeaderApp2 from "./components/HeaderApp2";
import Context from './components/Context'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import FooterApp from "./components/FooterApp";
import SearchEmploees from "./components/employeesForCompany/SearchEmployee";
import SignInCompany from "./components/employeesForCompany/SignInCompany";
import WorkerPage from "./components/forWorker/WorkerPage";
import SearchWork from "./components/forWorker/SearchWork";
import CompanyPage from "./components/employeesForCompany/CompanyPage";
import VacanciesOfTheCompany from "./components/employeesForCompany/VacanciesOfTheCompany";
import SignUpCompany from "./components/employeesForCompany/SignUpCompany";
import AllEmployeesPage from "./components/employeesForCompany/AllEmployeesPage";
import SignInWorker from "./components/forWorker/SignInWorker";
import SignUpWorker from "./components/forWorker/SignUpWorker";
import AtCompany from "./components/employeesForCompany/AtCompany";
import ConfirmCompanyPhone from "./components/employeesForCompany/ConfirmCompanyPhone";
import VacanciesForMe from "./components/forWorker/VacancieForMe";
import ConfirmUserPhone from "./components/forWorker/ConfirmUserPhone";
import WelcomeWorker from "./components/forWorker/WelcomeWorker";
import WorkerProfile from "./components/forWorker/WorkerProfile";
import VacancyDetails from "./components/forWorker/VacancyDetails";
import Responses from "./components/forWorker/Responses";
import VacancyCompany from "./components/forWorker/VacancyCompany";
import NewVacancy from "./components/employeesForCompany/NewVacancy";
import WelcomeEmployer from "./components/employeesForCompany/WelcomeEmployer";
import ArchiveCompany from "./components/employeesForCompany/ArchiveCompany";
import CompanyBalance from "./components/employeesForCompany/CompanyBalance";
import CompanyStatistics from "./components/employeesForCompany/CompanyStatistics";
import CompanyDocuments from "./components/employeesForCompany/CompanyDocuments";
import CompanySettings from "./components/employeesForCompany/CompanySettings";
import Pay from "./components/Pay";
import CompanyEmployerEdit from "./components/employeesForCompany/CompanyEmployerEdit";
import SelectedVacancy from "./components/employeesForCompany/SelectedVacancy";
import SelectedVacancyAddress from "./components/employeesForCompany/SelectedVacancyAddress";

function App() {
    // [значение, метод изменяющий это значение] = React.useState(первоначальное значение)
    // Здесь храним состояния кнопок: Войти, Выйти, Регистрация для приложения,
    // значения им присваивается при выполнении useEffect
    // searchWork - переключатель, что сейчас отображается страница для соискателей
    const [searchWork, setSearchWork] = React.useState(true)

    // const [searchEmployee, setSearchEmployee] = React.useState(false)

    const [signIn, setSignIn] = React.useState(false)
    const [signUp, setSignUp] = React.useState(false)
    const [user, setUser] = React.useState(null)

    const [signInCompany, setSignInCompany] = React.useState(false)
    const [signUpCompany, setSignUpCompany] = React.useState(false)
    const [company, setCompany] = React.useState(null)

    // для хранения id выбранной (просматриваемой) вакансии
    const [selectedVacancyId, setSelectedVacancyId] = React.useState('')

// Выполняется один раз при перерисовке компонента,
// присваиваем значения состояниям, некоторые получаем из локального хранилища
    useEffect(() => {
        const searchW = localStorage.getItem('searchWork')
        setSearchWork(JSON.parse(searchW))
        // const searchEmp = localStorage.getItem('searchEmployee')
        // setSignIn(JSON.parse(searchEmp))

        const sIn = localStorage.getItem('signInButtonHidden')
        setSignIn(JSON.parse(sIn))
        const sUp = localStorage.getItem('signUpButtonHidden')
        setSignUp(JSON.parse(sUp))
        const us = localStorage.getItem('user')
        setUser(JSON.parse(us))

        const sInComp = localStorage.getItem('signInCompany')
        setSignInCompany(JSON.parse(sInComp))
        const sUpComp = localStorage.getItem('signUpCompany')
        setSignUpCompany(JSON.parse(sUpComp))
        const comp = localStorage.getItem('company')
        setCompany(JSON.parse(comp))

        const selectVacancyId = localStorage.getItem('selectedVacancyId')
        setSelectedVacancyId(JSON.parse(selectVacancyId))
    }, [])

    // при изменении значения, эти изменения записываем в
    // локал сторадж, еще раз пересмотреть, возможно нужен useMemo-?
    useEffect(() => {
        localStorage.setItem('selectedVacancyId', JSON.stringify(selectedVacancyId))
    }, [selectedVacancyId])

    useEffect(() => {
        localStorage.setItem('searchWork', JSON.stringify(searchWork))
    }, [searchWork])

    // useEffect(() => {
    //     localStorage.setItem('searchEmployee', JSON.stringify(searchEmployee))
    // }, [searchEmployee])

    // каждый раз, когда меняется состояние объекта signIn, вызывается useEffect
    useEffect(() => {
        console.log('Отработал useEffect для signIn')
        localStorage.setItem('signInButtonHidden', JSON.stringify(signIn))
    }, [signIn])

    useEffect(() => {
        console.log('Отработал useEffect для signUp')
        localStorage.setItem('signUpButtonHidden', JSON.stringify(signUp))
    }, [signUp])

    // здесь можно заменить user на authUserId
    useEffect(() => {
        console.log('Отработал useEffect для user')
        console.log(user)
        localStorage.setItem('user', JSON.stringify(user))
    }, [user])

    useEffect(() => {
        localStorage.setItem('signInCompany', JSON.stringify(signInCompany))
    }, [signInCompany])

    useEffect(() => {
        localStorage.setItem('signUpCompany', JSON.stringify(signUpCompany))
    }, [signUpCompany])

    // здесь можно заменить user на authUserId
    useEffect(() => {
        localStorage.setItem('company', JSON.stringify(company))
    }, [company])

    // функция устанавливает значение true для переменной searchWork,
    // после ее отрисовки, необходимо для правильного отображения стиля меню
    function activeSearchWork() {
        setSearchWork(true)
    }

  return (
      <Context.Provider value={{user, setUser,
          signIn, setSignIn, signUp, setSignUp,
          searchWork, setSearchWork,
          signInCompany, setSignInCompany, signUpCompany, setSignUpCompany,
          company, setCompany, selectedVacancyId, setSelectedVacancyId,
      }}>
          <div>
              <Router >
                <HeaderApp2 />
                  {/*<div style={{width: "100%", backgroundColor: "#fffffe", margin: "auto", textAlign: "center"}}>*/}
                      <div style={{minHeight: "calc(100vh - 64px)"}}>
                          <Switch>
                              <Route exact path="/">
                                  <SearchWork />
                              </Route>
                              <Route exact path="/employees">
                                  <SearchEmploees />
                              </Route>
                              <Route exact path="/auth/company">
                                  <SignInCompany />
                              </Route>
                              <Route exact path="/reg/company">
                                  <SignUpCompany />
                              </Route>
                              <Route exact path="/confirm-745-phone">
                                  <ConfirmCompanyPhone />
                              </Route>
                              <Route exact path="/welcome-page">
                                  <WelcomeEmployer />
                              </Route>
                              <Route exact path="/employer/vacancies">
                                  <VacanciesOfTheCompany />
                              </Route>
                              <Route exact path="/profiles">
                                  <AllEmployeesPage />
                              </Route>
                              <Route exact path="/new-vacancy">
                                  <NewVacancy />
                              </Route>
                              <Route exact path="/selected-vacancy">
                                  <SelectedVacancy />
                              </Route>
                              <Route exact path="/selected-vacancy/address">
                                  <SelectedVacancyAddress />
                              </Route>
                              <Route exact path="/employer/personal-account">
                                  <CompanyPage />
                              </Route>
                              <Route exact path="/employer/personal-account/balance">
                                  <CompanyBalance />
                              </Route>
                              <Route exact path="/employer/personal-account/statistics">
                                  <CompanyStatistics />
                              </Route>
                              <Route exact path="/employer/personal-account/documents">
                                  <CompanyDocuments />
                              </Route>
                              <Route exact path="/employer/personal-account/settings">
                                  <CompanySettings />
                              </Route>
                              <Route exact path="/employer/personal-account/settings/edit">
                                  <CompanyEmployerEdit />
                              </Route>
                              <Route exact path="/employer/archive-c">
                                  <ArchiveCompany />
                              </Route>
                              <Route exact path="/pay_by_card">
                                  <Pay />
                              </Route>



                              <Route exact path="/personal-account/employees">
                                  <WorkerPage />
                              </Route>
                              <Route exact path="/profile">
                                  <WorkerProfile />
                              </Route>
                              <Route exact path="/auth/employees">
                                  <SignInWorker />
                              </Route>
                              <Route exact path="/reg/employees">
                                  <SignUpWorker />
                              </Route>
                              <Route exact path="/vacancy-employees">
                                  <VacanciesForMe />
                              </Route>
                              <Route exact path="/confirm/user-phone">
                                  <ConfirmUserPhone />
                              </Route>
                              <Route exact path="/welcome/employees">
                                  <WelcomeWorker />
                              </Route>
                              <Route exact path="/vacancy-details">
                                  <VacancyDetails />
                              </Route>
                              <Route exact path="/my-responses">
                                  <Responses />
                              </Route>
                              <Route exact path="/vacancy-details/company">
                                  <VacancyCompany />
                              </Route>

                              <Redirect to="/" />
                          </Switch>
                      </div>
                  {/*</div>*/}
                <FooterApp />
              </ Router>
          </div>
      </Context.Provider>
  );
}

export default App;
