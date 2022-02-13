
import React from 'react';
import Input from '../components/input';



export default function Dashboard() {
  const [studentName, SetStudentName] = React.useState('')
  const [fatherName, SetFatherName] = React.useState('')
  const [Dob, SetDob] = React.useState('')
  const [address, SetAddress] = React.useState('')
  const [city, SetCity] = React.useState('')
  const [state, SetState] = React.useState('')
  const [pin, SetPin] = React.useState('')
  const [phone, SetPhone] = React.useState('')
  const [Email, SetEmail] = React.useState('')
  const [classOpted, SetClassOpted] = React.useState('')
  const [marks, SetMarks] = React.useState('')
  const [enrolledDate, SetEnrolledDate] = React.useState('')
    return (
      
      <main style={{ padding: "1rem 0" }}>
        <h2>Enrollment App</h2>
        <Input onChange={e => SetStudentName(e.target.value)} value = {studentName}/>
        <Input onChange={e => SetFatherName(e.target.value)} value = {fatherName}/>
        <Input onChange={e => SetDob(e.target.value)} value = {Dob}/>
        <Input onChange={e => SetAddress(e.target.value)} value = {address}/>
        <Input onChange={e => SetCity(e.target.value)} value = {city}/>
        <Input onChange={e => SetState(e.target.value)} value = {state}/>
        <Input onChange={e => SetPin(e.target.value)} value = {pin}/>
        <Input onChange={e => SetPhone(e.target.value)} value = {phone}/>
        <Input onChange={e => SetEmail(e.target.value)} value = {Email}/>
        <Input onChange={e => SetClassOpted(e.target.value)} value = {classOpted}/>
        <Input onChange={e => SetMarks(e.target.value)} value = {marks}/>
        <Input onChange={e => SetEnrolledDate(e.target.value)} value = {enrolledDate}/>




      </main>
    );
  }
  