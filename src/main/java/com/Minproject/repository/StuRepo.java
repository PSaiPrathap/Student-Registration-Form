package com.Minproject.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Minproject.entity.Student;


public interface StuRepo extends JpaRepository<Student, Long> {

}
