import React, {useState} from 'react';
import Container from "@material-ui/core/Container";
import './styles2/NewVacancy.css'
import withStyles from "@material-ui/core/styles/withStyles";
import Checkbox from "@material-ui/core/Checkbox";

export default function NewVacancy() {

    // Работа с выбранным файлом
    const [fileName, setFileName] = useState("Загрузить файл с адресами")
    // Поля формы: Обязанности, Требования, Условия
    const [responsibilities, setResponsibilities] = useState("")
    const [requirements, setRequirements] = useState("")
    const [conditions, setConditions] = useState("")
    // Для адреса
    const [address1, setAddress1] = useState("")
    const [address2, setAddress2] = useState("")
    const [address3, setAddress3] = useState("")

    const [address2boxHidden, setAddress2boxHidden] = useState(true)
    const [address3boxHidden, setAddress3boxHidden] = useState(true)
    const [address1AddHidden, setAddress1AddHidden] = useState(false)
    const [address2AddHidden, setAddress2AddHidden] = useState(false)
    const [addr2CleanH, setAddr2CleanH] = useState(true)
    const [addr3CleanH, setAddr3CleanH] = useState(true)


    let fileInput = React.createRef();
    function handleFiles(event) {
        let selectedFile = event.target.value
        if (selectedFile) {
            if (selectedFile.lastIndexOf('\\')){
                let name = selectedFile.lastIndexOf('\\')+1;
                const filename = selectedFile.slice(name);
                setFileName(filename)
            }
            else{
                let name = selectedFile.lastIndexOf('/')+1;
                const filename = selectedFile.slice(name);
                setFileName(filename)
            }
        }
        else setFileName("Загрузить файл с адресами")
    // alert(
    //     `Selected file - ${fileInput.current.files[0].name}`
    // );
    }

    // Для поля адреса
    function address1Handler(event) {
        setAddress1(event.target.value)
    }
    function cleanAddress1() {
        setAddress1("")
    }
    function address2Handler(event) {
        setAddress2(event.target.value)
    }
    function cleanAddress2() {
        setAddress2("")
    }
    function address3Handler(event) {
        setAddress3(event.target.value)
    }
    function cleanAddress3() {
        setAddress3("")
    }
    function showAddress2() {
        setAddress2boxHidden(false) // показали второе поле для адреса
        setAddress1AddHidden(true)  // скрыли кнопку Добавить
        if (address3boxHidden) {
            setAddress2AddHidden(false)
        } else {
            setAddress2AddHidden(true)
        }
        setAddr2CleanH(false)
    }
    function showAddress3() {
        setAddress3boxHidden(false)
        setAddress2AddHidden(true)
        setAddr2CleanH(false)
        setAddr3CleanH(false)
    }
    function deleteAddress2box() {
        setAddress2boxHidden(true) // скрыли поле 2
        setAddress1AddHidden(false)  // открыли кнопку Добавить для 1 адреса
        setAddress2("")  // очистили значение 2-го поля
        setAddr2CleanH(true) // скрыли кнопку удаления поля 2
        // setAddr3CleanH(true)
    }
    function deleteAddress3box() {
        setAddress3boxHidden(true) //скрыли поле 3
        // setAddress2AddHidden(false)  //открыли кнопку Добавить для 2 адреса
        setAddress3("") // очистили значение 2-го поля
        // setAddr2CleanH(true) // скрыли кнопку удаления поля 2
        setAddr3CleanH(true)
    }
    // Для поля Обязанности
    function responsibilitiesHandler(event) {
        setResponsibilities(event.target.value)
    }
    function cleanResponsibilities() {
        setResponsibilities("")
    }
    // Для поля Требования
    function requirementsHandler(event) {
        setRequirements(event.target.value)
    }
    function cleanRequirements() {
        setRequirements("")
    }
    // Для поля Условия
    function conditionsHandler(event) {
        setConditions(event.target.value)
    }
    function cleanConditions() {
        setConditions("")
    }

    const RedCheckbox = withStyles({
        root: {
            width: '0',
            height: '0',
            color: '#848C8E',
            '&$checked': {
                color: '#f04d2d',
            },
        },
        checked: {},
    })((props) =>
        <Checkbox color="default" {...props} />);

    return(
        <Container maxWidth="lg">
            <div className="company-page-title">
                Создание вакансии
            </div>
            <div className="box-main">
                <div className="box-1">
                   <div className="row-box-1">
                       <span className="tt">
                           Название вакансии
                       </span>
                       <input className="inp" placeholder="Например, комплектовщик"/>
                       <span className="tt-red">
                           Выбрать название из каталога
                       </span>
                   </div>
                    <div className="row-box-1">
                       <span className="tt">
                           Заработная плата
                       </span>
                        <input className="inp marg-l1"/>
                        <select className="inp2 marg-l font-14-bold">
                            <option value="Руб/мес">Руб/мес</option>
                            <option value="Руб/день">Руб/день</option>
                            <option value="Руб/час">Руб/час</option>
                            <option value="Руб/минуту">Руб/минуту</option>
                            <option value="Руб/услугу">Руб/услугу</option>
                        </select>
                        <span className="font-14-bold marg-l">
                           за услугу, за минуту, за час, за день
                       </span>
                    </div>
                    <div className="row-box-2">
                        <RedCheckbox
                            // checked={fullTime}
                            // onChange={fullTimeHandler}
                            value=""
                            disableRipple={true}
                            style={{ backgroundColor: 'transparent' }}
                        />
                        <span className="font-14-500 marg-l">
                           По договоренности
                       </span>
                    </div>
                    <div className="row-box-2">
                         <span className="font-14-bold">
                           Гражданство
                       </span>
                        <select className="inp1 f12">
                            <option value="Руб/мес">РФ</option>
                            <option value="Руб/день">Любое</option>
                        </select>
                    </div>
                    <div className="row-box-2">
                         <span className="font-14-bold">
                           Статус самозанятого гражданина
                         </span>
                        <span className="marg-l">
                           <RedCheckbox
                               // checked={fullTime}
                               // onChange={fullTimeHandler}
                               value=""
                               disableRipple={true}
                               style={{ backgroundColor: 'transparent' }}
                           />
                         </span>
                        <span className="font-14-bold marg-l">
                          Да
                       </span>
                        <span className="marg-l">
                           <RedCheckbox
                               // checked={fullTime}
                               // onChange={fullTimeHandler}
                               value=""
                               disableRipple={true}
                               style={{ backgroundColor: 'transparent' }}
                           />
                         </span>
                        <span className="font-14-bold marg-l ">
                          Нет
                       </span>
                        <span className="font-14-bold marg-l73">
                           Мед. книжка
                         </span>
                        <span className="marg-l">
                           <RedCheckbox
                               // checked={fullTime}
                               // onChange={fullTimeHandler}
                               value=""
                               disableRipple={true}
                               style={{ backgroundColor: 'transparent' }}
                           />
                         </span>
                        <span className="font-14-bold marg-l">
                          Да
                       </span>
                        <span className="marg-l">
                            <RedCheckbox
                                // checked={fullTime}
                                // onChange={fullTimeHandler}
                                value=""
                                disableRipple={true}
                                style={{ backgroundColor: 'transparent' }}
                            />
                        </span>
                        <span className="font-14-bold marg-l">
                          Нет
                       </span>
                    </div>
                </div>

                <div className="box-2-title">
                    должностные обязанности и условия работы
                </div>

                <div className="box-2">
                    <div className="row-box-1">
                        <span className="font-14-bold">
                            Описание вакансии
                        </span>
                    </div>
                    <div className="row-box-1 ">
                        <textarea className="textar f14-c"
                                  value={responsibilities}
                                  onChange={responsibilitiesHandler}
                                  onDoubleClick={cleanResponsibilities}
                                  placeholder="Обязанности"/>
                        <textarea className="textar marg-l18 f14-c"
                                  value={requirements}
                                  onChange={requirementsHandler}
                                  onDoubleClick={cleanRequirements}
                                  placeholder="Требования"/>
                        <textarea className="textar marg-l18 f14-c"
                                  value={conditions}
                                  onChange={conditionsHandler}
                                  onDoubleClick={cleanConditions}
                                  placeholder="Условия"/>
                    </div>
                    <div className="row-box-2">
                         <span className="font-14-bold marg-r-38">
                           График работы
                         </span>
                        <span className="marg-l ">
                           <RedCheckbox
                               // checked={fullTime}
                               // onChange={fullTimeHandler}
                               value=""
                               disableRipple={true}
                               style={{ backgroundColor: 'transparent' }}
                           />
                         </span>
                        <span className="font-14-bold marg-l f14-c">
                          Полный
                       </span>
                        <span className="marg-l">
                           <RedCheckbox
                               // checked={fullTime}
                               // onChange={fullTimeHandler}
                               value=""
                               disableRipple={true}
                               style={{ backgroundColor: 'transparent' }}
                           />
                         </span>
                        <span className="font-14-bold marg-l f14-c ">
                          Сменный
                       </span>
                        <span className="marg-l">
                           <RedCheckbox
                               // checked={fullTime}
                               // onChange={fullTimeHandler}
                               value=""
                               disableRipple={true}
                               style={{ backgroundColor: 'transparent' }}
                           />
                         </span>
                        <span className="font-14-bold marg-l f14-c">
                          Вахта
                       </span>
                        <span className="marg-l">
                            <RedCheckbox
                                // checked={fullTime}
                                // onChange={fullTimeHandler}
                                value=""
                                disableRipple={true}
                                style={{ backgroundColor: 'transparent' }}
                            />
                        </span>
                        <span className="font-14-bold marg-l f14-c">
                          Свободный
                       </span>
                        <span className="marg-l">
                            <RedCheckbox
                                // checked={fullTime}
                                // onChange={fullTimeHandler}
                                value=""
                                disableRipple={true}
                                style={{ backgroundColor: 'transparent' }}
                            />
                        </span>
                        <span className="font-14-bold marg-l f14-c">
                          Частичная занятость
                       </span>
                    </div>

                    <div className="row-box-1 flex-only">
                       <span className="tt">
                           Адрес
                       </span>
                        <div style={{display: 'inline'}}>
                            <div className="flex-only flex-vert">
                                <div>
                                    <input className="inp3 f12"
                                           value={address1}
                                           onChange={address1Handler}
                                           onDoubleClick={cleanAddress1}
                                           placeholder="Укажите адрес, куда Вам нужен сотрудник"/>
                                    <span className="tt-red2 this_link"
                                        hidden={address1AddHidden}
                                          onClick={showAddress2}>
                                        Добавить
                                    </span>
                                </div>

                                <div hidden={address2boxHidden}
                                     className="marg-t">
                                    <input className="inp3 f12"
                                           value={address2}
                                           onChange={address2Handler}
                                           onDoubleClick={cleanAddress2}
                                           placeholder="Укажите адрес, куда Вам нужен сотрудник"/>
                                       <span className="tt-red2 this_link"
                                             hidden={address2AddHidden}
                                             onClick={showAddress3}>
                                            Добавить
                                       </span>
                                       <span className="tt-red2 this_link "
                                              onClick={deleteAddress2box}
                                              hidden={addr2CleanH}>
                                            {/*<ClearIcon/>*/}
                                            Удалить
                                       </span>
                                </div>

                                <div hidden={address3boxHidden} className="marg-t">
                                    <input className="inp3 f12"
                                           value={address3}
                                           onChange={address3Handler}
                                           onDoubleClick={cleanAddress3}
                                           placeholder="Укажите адрес, куда Вам нужен сотрудник"/>
                                    <span className="tt-red2 this_link"
                                          hidden={address2AddHidden}>
                                        Добавить
                                    </span>
                                    <span className="tt-red2 this_link"
                                          onClick={deleteAddress3box}
                                    hidden={addr3CleanH}>
                                        {/*<ClearIcon />*/}
                                        Удалить
                                    </span>
                                </div>

                                <div className="f-12 marg-t-b" >
                                    Шаблон для массовой загрузки адресов
                                </div>
                                <div>
                                    <input type="text" className="inp3 f12 br" value={fileName}
                                           readOnly={true}/>
                                    <input type="file" id="fileElem"
                                           ref={fileInput}
                                           multiple
                                           style={{display:'none'}}
                                           onChange={handleFiles}
                                    />
                                        <label htmlFor="fileElem" className="tt-red2 this_link">Обзор</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row-box-2 align-c">
                        <button className="red-button_"
                        >Опубликовать</button>
                    </div>

                </div>
            </div>
        </Container>
    )
}