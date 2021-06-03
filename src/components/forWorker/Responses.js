import React, {useState, useEffect} from 'react';
import Container from "@material-ui/core/Container";
import Ad from "../employeesForCompany/VacanciesText";
import AdItem from "../AdItem";

export default function Responses(){
    // временная функция-заглушка, для работы с вакансиями
    // состояние нашей страницы: массив вакансий, получим с сервера
    // после того, как отрисуется этот компонент Responses отработает useEffect()
    const [myVacancies, setMyVacancies] = useState([])
    // вспомогательный флаг, чтоб происходила перересовка компонента
    const[paint, setPaint] = useState(false)

    //выполнится после монтирования в DOM и обновления
    useEffect(() => {
        if(Ad.length>0) {
            let tempArray = []
            Ad.map(item => {
                if (item.is_respond) {
                    tempArray.push(item)
                }
            })
            setMyVacancies(tempArray)
        }
    }, [])
    //выполнится после обновления
    useEffect(() => {
        if(myVacancies.length>0) {
            let tempArray = []
            myVacancies.map(item => {
                if (item.is_respond) {
                    tempArray.push(item)
                }
            })
            setMyVacancies(tempArray)
        }
    }, [paint])

    // Здесь должен идти запрос на бэк, что на вакансию откликнулись
    function respondHandler(id) {
        respondButtonHandler(id, true)
    }
    //Здесь должен идти запрос на бэк, что отменили отклик на вакансию
    function cancelHandler(id) {
        respondButtonHandler(id, false)
        setPaint(prevState => !prevState)
    }
    function respondButtonHandler(id, bool) {
        if(myVacancies.length>0) {
            let tempArray = []
            myVacancies.map(item => {
                if (item.id === id) {
                    item.is_respond = bool
                }
                tempArray.push(item)
            })
            setMyVacancies(tempArray)
        }
    }



    return(
        <Container maxWidth="lg">
            <div className="company-page-title">
                Ваши отклики
            </div>

            <div style={{ marginBottom: "50px"}} className="flex-space-around">
                <div>
                    {myVacancies.length > 0 ?
                        myVacancies.map(ad =>
                            <div key={ad.id}>
                                <AdItem
                                    vacancy = {ad}
                                    respondHand={respondHandler}
                                    cancelHandler={cancelHandler}
                                />
                            </div>
                        ) : ""}

                </div>
            </div>
        </Container>

    )
}