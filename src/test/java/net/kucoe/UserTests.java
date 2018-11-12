package net.kucoe;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Ignore;
import org.junit.Test;
import static org.junit.Assert.*;
import org.openqa.selenium.By;
import org.openqa.selenium.Cookie;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
//import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import org.openqa.selenium.chrome.ChromeDriver;

import java.util.concurrent.TimeUnit;

public class UserTests {

    private static ChromeDriver driver;

    @BeforeClass
    public static void prepare() {
        System.setProperty("webdriver.chrome.driver", "/home/net/chromedriver");
        driver = new ChromeDriver();
    }

    @AfterClass
    public static void close() {
        if (driver != null) {
            driver.quit();
        }
    }

    @Test
    public void newUserWithRoom() {
        driver.get("https://kucoe.net");
        avoidTours();
        driver.findElement(By.id("addRoom")).click();
        waitForElement("room-window");
        driver.findElement(By.id("room-name")).sendKeys("testing-room");
        driver.findElement(By.id("description")).sendKeys("forTesting");
        driver.findElement(By.id("timezone")).click();
        driver.findElement(By.id("new-email")).sendKeys("test@kucoe.net");
        driver.findElement(By.id("room-button")).sendKeys(Keys.RETURN);
        try {
            Thread.sleep(TimeUnit.SECONDS.toMillis(1));
        } catch (InterruptedException e) {
            //ignore
        }
        WebElement message = waitForElement("message");
        assertEquals("We have created your new chat room for you", message.getAttribute("innerHTML"));
    }

    @Test
    public void userFailedLogin() {
        driver.get("https://kucoe.net");
        avoidTours();
        waitForElement("login").sendKeys(Keys.RETURN);
        waitForElement("email").sendKeys("we4ius@wi.d");
        driver.findElement(By.id("password")).sendKeys("U34ukl#$");
        driver.findElement(By.id("login-button")).sendKeys(Keys.RETURN);
        waitForElement("reset-password").click();
        WebElement window = waitForElement("confirm-message");
        assertNotNull(window);
    }

    private void avoidTours() {
        Cookie cookie = new Cookie("welcome-tour-passed", "1");
        driver.manage().addCookie(cookie);
        cookie = new Cookie("room-tour-passed", "1");
        driver.manage().addCookie(cookie);
        cookie = new Cookie("roomCreate-tour-passed", "1");
        driver.manage().addCookie(cookie);
    }

    private WebElement waitForElement(String id) {
        return new WebDriverWait(driver, 10)
                .until(ExpectedConditions.visibilityOfElementLocated(By.id(id)));
    }
}