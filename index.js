import {} from "dotenv/config";
import puppeteer from "puppeteer";

async function starting() {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto("https://unsplash.com");

  // Acessando a página de login por meio do botão
  await page.click(".cLLOA.p1cWU.jpBZ0.EzsBC.KHq0c.XHI2L");

  // Preenchendo usuário, senha e clicando no botão para enviar os dados
  await page.type('[name="user[email]"]', process.env.UNSPLASH_EMAIL);
  await page.type("#user_password", process.env.UNSPLASH_PASSWORD);
  await page.click('[type="submit"]');

  // Essa função serve para aguardar os cookies serem salvos antes de prosseguir
  await page.waitForNavigation();

  //Acessando o link de uma imagem
  await page.goto("https://unsplash.com/photos/LzWXPcJg7lk");

  // Dando like na imagem
  await page.click('[title="Like"]');

  await browser.close();
}

starting();
