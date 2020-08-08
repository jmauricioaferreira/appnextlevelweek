import React from 'react';

import PageHeader from '../../assets/components/PageHeader';
import TeacherItem from '../../assets/components/TeacherItem';
import Input from '../../assets/components/Input';

import './styles.css';
import Select from '../../assets/components/Select';


function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Esses são os proffys disponíveis">
            <form id="search-teachers">
                <Select 
                    name="subject" 
                    label="Matéria"
                    options={[
                        { value: 'Artes', label: 'Artes'},
                        { value: 'Biologia', label: 'Biologia'},
                        { value: 'Química', label: 'Química'},
                        { value: 'História', label: 'História'},
                        { value: 'Geografia', label: 'Geografia'},
                        { value: 'Matemática', label: 'Matemática'},
                        { value: 'Filosofia', label: 'Filosofia'},
                        { value: 'Sociologia', label: 'Sociologia'},
                        { value: 'Redação', label: 'Redação'},
                        { value: 'Física', label: 'Física'},
                        { value: 'Português', label: 'Português'}
                    ]}
                    />

                <Select 
                    name="week_day" 
                    label="Dia da semana"
                    options={[
                        { value: '0', label: 'Domingo'},
                        { value: '1', label: 'Segunda-feira'},
                        { value: '2', label: 'Terça-feira'},
                        { value: '3', label: 'Quarta-feira'},
                        { value: '4', label: 'Quinta-feira'},
                        { value: '5', label: 'Sexta-feira'},
                        { value: '6', label: 'Sábado'},
                    ]}
                    />
                <Input type="time" name="time" label="Hora"/>
       
            </form>
            </PageHeader>
            <main>
               <TeacherItem />
               <TeacherItem />
               <TeacherItem />
               <TeacherItem />
            </main>
        </div>
       
    )
}

export default TeacherList;