package com.Minproject.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Minproject.entity.Student;
import com.Minproject.repository.StuRepo;

@Service
public class StuService {
	@Autowired
    public StuRepo repo;

    public List<Student> getStudent() {
        return repo.findAll();
    }

    public Student create(Student s) {
        return repo.save(s);
    }

    public void delStu(Long id) {
        repo.deleteById(id);
    }

    public Student update(Student student) {
        return repo.save(student);
    }

    public Student getStudentById(Long id) {
        return repo.findById(id).orElse(null);
    }

}
