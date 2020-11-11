# HerokuApp Test Automation

This project was developed for an interview assignment. This project covers some of the common test scenarios of web automation using Selenium and Cucumber. The url is as below:

```shell
https://the-internet.herokuapp.com/
```

## Tools Required

This project requires following tools already installed/downloaded:
* Eclipse 2020-09 (https://www.eclipse.org/downloads/packages/)
* JDK 1.8 (https://www.oracle.com/uk/java/technologies/javase/javase-jdk8-downloads.html)
* Selenium Chrome Driver (already included in this repository)
* Selenium Firefox Driver (already included in this repository)
* Cucumber for Eclipse plug-in (downloaded from Eclipse marketplace)
* Maven (https://www.eclipse.org/m2e/)


## Getting started

Clone the repository on your local computer
* Start Eclipse
* Choose File > Import 
* In the import dialog Choose Maven > Existing Maven Projects
* In the import Maven Projects dialog, browse the directory of your downloaded code.
* Select the project from the listbox and click finish

## Run BDD automation tests

Maven automatically installs all the dependencies. To run tests

* Open TestRunner Folder under src and right click on Runner.Java 
* Choose RunAs > JUnit Test
* The tests will start executing 
* The HTML Test Report can be opened from target > cucumber-repots folder after the execution has finished. 

## Features

This project makes it easy to:
* Run Automated Tests for Web using Cucumber Feature file
* Installs all the related dependencies using maven
* Provides simple instructions

## Improvements

There could be many improvements that can be made:
* Create Background step for performing common steps at the start
* Update the code to use Page Object Model (POM)
* Update code to cover more scenarios

## Contributing

As this is a project developed for interview, I know this might not be the perfect approach
for all the implementations out there. If you have any ideas, just
[open an issue][issues] and tell me what you think.

If you'd like to contribute, please fork the repository and make changes as
you'd like. Pull requests are warmly welcome.

## Licensing

This project is licensed under Unlicense license. This license does not require
you to take the license with you to your project.
