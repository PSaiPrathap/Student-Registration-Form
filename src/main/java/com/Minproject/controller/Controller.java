package com.Minproject.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.Minproject.entity.Student;
import com.Minproject.service.StuService;

@RestController
public class Controller {
	@Autowired
	public StuService service;
	@GetMapping("/getStudent")
	@CrossOrigin(origins = "http://localhost:3000")
	public List<Student> displayStudent(){
		return service.getStudent();
	}
	@PostMapping("/saveStudent")
	@CrossOrigin(origins  = "http://localhost:3000")
	public Student createStudent(@RequestBody Student s){
		return service.create(s);
	}
	@DeleteMapping("/delStu/{id}")
	@CrossOrigin(origins  = "http://localhost:3000")
	public void delStudent(@PathVariable Long id){
		service.delStu(id);
	}
	@PutMapping("/updateStu/{id}")
	@CrossOrigin(origins = "http://localhost:3000")
	public Student updateStu(@PathVariable Long id, @RequestBody Student updatedStudent) {
	    Student existingStudent = service.getStudentById(id);
	    
	    if (existingStudent != null) {
	        existingStudent.setStudentName(updatedStudent.getStudentName());
	        existingStudent.setPhoneNumber(updatedStudent.getRollno());
	        existingStudent.setDob(updatedStudent.getDob());
	        existingStudent.setGender(updatedStudent.getGender());
	        existingStudent.setAddress(updatedStudent.getAddress());
	        existingStudent.setEmail(updatedStudent.getEmail());
	        existingStudent.setStatus(updatedStudent.getStatus());
	        
	        return service.update(existingStudent);
	    } else {
	        throw new RuntimeException("Student not found with id: " + id);
	    }
	}



}
