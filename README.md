# AWS-Questions-API
REST NODE JS API that creates, reads, updates and deletes aws CLF-C02 certification questions from a Atlas MongoDB database.
# Objective
This project aims to connect students from course DIO AWS CLF-C02 certification who want to practice for the exam through questions produced by the group itself.
# Fast test
Test the project access the url http://ec2-54-162-138-29.compute-1.amazonaws.com/questionfro get all questions from database
# How can i use this project.
This project is a docker container running on a AWS EC2 instance and can be access through endpoints:
<ul>
  <li>CREATE A QUESTION</li>
    <ul>
      <li>Method: POST</li>
      <li>url:ec2-54-162-138-29.compute-1.amazonaws.com/question</li>
      <li>content-type:applicsation/json</li>
      <li>body:<br>
      <pre>
        {
            "enunciation":"string",
            "alternativeA":"string",
            "alternativeB":"string",
            "alternativeC":"string",
            "alternativeD":"string",
            "answer":"string"
        }<pre></li>
      </li>
    </ul>
  <li>READ ALL QUESTIONS</li>
    <ul>
      <li>Method: GET</li>
      <li>url:ec2-54-162-138-29.compute-1.amazonaws.com/question</li>
    </ul>
  <li>READ ONE QUESTION</li>
    <ul>
      <li>Method: GET</li>
      <li>url:ec2-54-162-138-29.compute-1.amazonaws.com/question/id</li>
    </ul>
  <li>UPDATE A QUESTION</li>
    <ul>
      <li>Method: PATCH</li>
      <li>url:ec2-54-162-138-29.compute-1.amazonaws.com/question/id</li>
      <li>content-type:applicsation/json</li>
      <li>body:<br>
      <pre>
        {
            "enunciation":"string",
            "alternativeA":"string",
            "alternativeB":"string",
            "alternativeC":"string",
            "alternativeD":"string",
            "answer":"string"
        }<pre></li>
      </li>
    </ul>
  <li>DELETE ONE QUESTION</li>
    <ul>
      <li>Method: DELETE</li>
      <li>url:ec2-54-162-138-29.compute-1.amazonaws.com/question/id</li>
    </ul>
</ul>
<br>


