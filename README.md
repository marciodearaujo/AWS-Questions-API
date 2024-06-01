# AWS-Questions-API
REST NODE JS API that creates, reads, updates and deletes aws CLF-C02 certification questions from a Atlas MongoDB database.
# Objective
This project aims to connect students from course DIO AWS CLF-C02 certification who want to practice for the exam through questions produced by the group itself.
# Fast test
<p>Test if the project is running accessing the url to <a href="http://ec2-54-162-138-29.compute-1.amazonaws.com/question" target="_blank">get all questions</a> from database.</p>

# How can use this project
This project is a docker container running on a AWS EC2 instance and can be access through endpoints:
<ul>
  <li>AUTHENTICATION: <br>Note: To create, update and delete questions, the user must be authenticated by a AwsIamUserName and AwsIamUserId. To request this credencials, send a e-mail for the address     marcio.sgtbastos@gmail.com.</li>
  <ul>
    <li>Method:Post</li>
    <li>url:ec2-54-162-138-29.compute-1.amazonaws.com/token</li>
    <li>content-type:application/json</li>
    <li>Body:
      <pre>
        {
            "AwsIamUserName":"string",
            "AwsIamUserId":"string",
        }<pre></li>
      <li>Response:
        <pre>
          {
            "authenticated": true,
            "token": "token",
            "expireAt": "UTC Datetime"
          }
        </pre>
}</li>
  </ul>
  <li>CREATE A QUESTION:<br>
    Note 1: To create a question all body field is required<br>
    Note 2: The answer field accepts just values:"A","B","C","D".</li></li>
    <ul>
      <li>Method: POST</li>
      <li>url:ec2-54-162-138-29.compute-1.amazonaws.com/question</li>
      <li>content-type:application/json</li>
      <li>header: authentication: token</li>
      <li>Body:
      <pre>
        {
            "question":"string",
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
  <li>UPDATE A QUESTION:<br>
  Note 1: To update a question any body field can be omitted.<br>
  Note 2: The answer field accepts just values:"A","B","C","D".</li>
    <ul>
      <li>Method: PATCH</li>
      <li>url:ec2-54-162-138-29.compute-1.amazonaws.com/question/id</li>
      <li>content-type:application/json</li>
      <li>header: authetication:token</li>
      <li>body:<br>
      <pre>
        {
            "question":"string",
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
      <li>header: authetication:token</li>
    </ul>
</ul>
<br>


