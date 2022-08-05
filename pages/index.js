
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Stefan Lovecchio</title>
    <link rel="stylesheet" href="../styles/styleSheet.css" type="text/css" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Megrim&family=Poiret+One&display=swap" rel="stylesheet">
</head>
</head>

<body>
    <header>
        <img src="me.png" alt="Stefan Lovecchio" />
        <h1>Stefan Lovecchio</h1>
        <h4>Junior Web Developer</h4>
    </header>

    <nav id="menu">
        <button onclick="location.href='sLovecchioArtResume.pdf'" download="StefanLovecchioResume" type="button">Résumé</button>
        <button onclick="location.href='https://www.artstation.com/stefanlovecchio'" type="button">Artstation</button>
        <button onclick="location.href='#contact'" type="button">Contact Me</button>
    </nav>

    <main>
        <div class="cards">
            <div class="About">
                <h2>About Me and Academic Honesty</h2>
                <p id="description">I am a Junior Web Developer with a passion for learning and creating.
                </p>
                <p id="honesty">
                    I declare that my assessment is wholly my own work in accordance with Seneca Academic
                    Policy. No part of this assessment has been copied manually or electronically from any other
                    source (including web sites) except for the information supplied by the WEB222 instructors and /
                    or made available in this assessment for my use. I also declare that no part of this assignment
                    has been distributed to other students.
                </p>
                <footer>
                    <p><b>Date:</b> Aug 4, 2022</p>
                </footer>
            </div>

            <div class="info">
                <h2>Basic Information</h2>
                <table>
                    <tr>
                        <th scope="row">AGE:</th>
                        <td>32</td>
                    </tr>
                    <th scope="row">EMAIL:</th>
                    <td>slovecchio@gmail.com</td>
                    </tr>
                    <th scope="row">LANGUAGE:</th>
                    <td>English</td>
                    </tr>
                    <th scope="row">CLASS SECTION:</th>
                    <td>NHH</td>
                    </tr>
                    <th scope="row">STUDENT ID:</th>
                    <td>154725212</td>
                    </tr>
                    <th scope="row">INSTRUCTOR:</th>
                    <td>Siyavash Ghassemi Nia</td>
                    </tr>
                </table>
            </div>

            <div class="education">
                <h2>Education</h2>
                <table></table>
                <div class="schools">
                    <div id="ed1">
                        <h4>Seneca College</h4>
                        <h6>2022-2025<br></h6>
                        <h5>Advanced Diploma</h5>
                        <p>Graduated with honours</p>
                    </div>
                    
                    <div id="ed2">
                        
                        <hr>
                        <h4>Eastview Secondary School</h4>
                        <h6>2004-2008<br></h6>
                        <h5>Highschool Diploma</h5>
                        <div class="square"></div>
                    </div>
                </div>
            </div>
        </div>

        <h2 id="con">Contact Me</h2>
        <div id="contact">
            <form action="https://httpbin.org/post" method="POST" id="contact-form">
                <div id="form1">
                    <label for="name">Name</label>
                    <input type="text" id="name" placeholder="Enter name" name="name">
                    <br>

                    <label for="email">Email address</label>
                    <input type="email" id="email" placeholder="Enter email" name="email">
                    <br>

                    <label for="address">Address</label>
                    <input type="text" id="address" name="address" placeholder="Enter address">
                    <br>

                    <label for="city">City</label>
                    <input list="cities" id="city" name="city" autocomplete="on">
                    <datalist id="cities">
                        <option value="Toronto">
                        <option value="Etobicoke">
                        <option value="North York">
                        <option value="Scarborough">
                    </datalist>
                    <br>

                    <label for="postalCode">Postal Code</label>
                    <input type="text" id="postalCode" name="postalCode" placeholder="X0X X0X"
                        pattern="[a-zA-Z][0-9][a-zA-z] ?[a-zA-Z][0-9][a-zA-z]">
                    <br>
                </div>

                <div id="form2">
                    <legend>What is your reason for contacting me?</legend>
                    <label class="radio-inline">
                        <input type="radio" name="question" value="question">
                        <label for="question">Question</label><br>
                        <label type="radio" class="radio-inline">
                            <input type="radio" name="question" value="comment">
                            <label for="comment">Comment</label><br>
                            <Label type="radio" class="radio-inline">
                                <input type="radio" name="question" value="hiring" id="hiring">
                                <label for="hiring">Hiring</label><br>
                                <input type="radio" name="question" value="other">
                                <label for="other">Other</label>
                                <br>
                                <!-- dynamically reveal input box for hourly rate if "hiring" is selected -->
                                <div id="box">
                                    <label for="hourlyRate" visibility="hidden">Hourly Rate</label>
                                    <input type="text" id="hourlyRate" name="hourlyRate" placeholder="Enter hourly rate" visibility="hidden"
                                        pattern="[0-9]{1,3}">
                                    </div>
                                <p><label for="message">Message</label></p>
                                <textarea id="w3review" name="w3review" rows="5"
                                    cols="50">Type message here...</textarea>
                                <br>
                                <button type="submit" class="btn btn-primary">Submit</button>
                </div>
        </div>
    </main>

    <!-- JavaScript Data Files -->
    <script src="script.js"></script>
</body>

</html>
