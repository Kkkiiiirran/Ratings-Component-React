from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.action_chains import ActionChains
import time

options = webdriver.ChromeOptions()
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)
driver.get('https://www.dailymotion.com/tseries2')

def scroll_down_page(driver, speed=8):
    scroll_pause_time = speed
    last_height = driver.execute_script("return document.body.scrollHeight")
    
    while True:
        driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
        time.sleep(scroll_pause_time)
        new_height = driver.execute_script("return document.body.scrollHeight")
        if new_height == last_height:
            break
        last_height = new_height

video_urls = set()
base_url = "https://www.dailymotion.com"

try:
    while len(video_urls) < 500:
        scroll_down_page(driver)
        video_elements = driver.find_elements(By.XPATH, '//a[contains(@href, "/video/")]')
        for video in video_elements:
            video_urls.add(base_url + video.get_attribute('href'))
        if len(video_elements) == 0:
            # Refresh the page if no new elements found
            driver.refresh()
            time.sleep(5)  # Adjust the wait time as needed
        print(len(video_urls))
finally:
    driver.quit()

with open('tseries-url.txt', 'w') as file:
    for url in video_urls:
        file.write(url + '\n')
