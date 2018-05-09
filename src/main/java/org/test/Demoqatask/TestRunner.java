package org.test.Demoqatask;



import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="Feature",glue= {"org.test.Demoqatask"},plugin= {"pretty" , "html:C:\\Users\\User\\Desktop\\bharathi Excep\\Demoqatask\\target"},tags= {"@textbox,@regression,@sanity"})
public class TestRunner {

	

}
