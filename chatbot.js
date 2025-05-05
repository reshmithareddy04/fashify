document.addEventListener("DOMContentLoaded", () => {
  const chatBody = document.getElementById("chatBody");
  const chatInput = document.getElementById("chatInput");
  const chatSend = document.getElementById("chatSend");
  const chatbot = document.getElementById("chatbot");
  const optionsContainer = document.createElement("div");
  optionsContainer.id = "optionsContainer";
  optionsContainer.style.marginBottom = "10px";
  chatBody.appendChild(optionsContainer);

  let isFirstOpen = true; // Track if chatbot is opened for the first time

  // Toggle chatbot visibility (icon to chatbox and vice versa)
  window.toggleChatbot = function () {
    chatbot.classList.toggle("active");
    if (chatbot.classList.contains("active") && isFirstOpen) {
      botGreet(); // Only greet on first open
      isFirstOpen = false;
    }
  };

  const botGreet = () => {
    const greeting = "Welcome to StyloBot, your haute couture fashion concierge! ✨ Explore curated styling for any occasion, weather, or the latest 2025 trends. Select an option below or type your query to begin your journey to effortless elegance.";
    addBotMessage(greeting);
    displayOptions();
  };

  const addUserMessage = (message) => {
    const msg = document.createElement("div");
    msg.className = "user-message";
    msg.textContent = message;
    chatBody.appendChild(msg);
    chatBody.scrollTop = chatBody.scrollHeight;
  };

  const addBotMessage = (message) => {
    const msg = document.createElement("div");
    msg.className = "bot-message";
    msg.textContent = message;
    chatBody.appendChild(msg);
    chatBody.scrollTop = chatBody.scrollHeight;
  };

  const displayOptions = () => {
    optionsContainer.innerHTML = `
      <div style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: center;">
        <button class="option-btn" data-option="occasion">Occasion Outfit</button>
        <button class="option-btn" data-option="weather">Weather Styling</button>
        <button class="option-btn" data-option="color">Color Theory</button>
        <button class="option-btn" data-option="trends">2025 Trends</button>
      </div>
    `;
    const buttons = document.querySelectorAll(".option-btn");
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => handleOptionClick(btn.dataset.option));
    });
  };

  const handleOptionClick = (option) => {
    addUserMessage(option.charAt(0).toUpperCase() + option.slice(1));
    switch (option) {
      case "occasion":
        addBotMessage(
          "For what occasion are you dressing? Options: Party, Wedding, Formal Meeting, or Casual Outing. Type your choice or describe the event!"
        );
        break;
      case "weather":
        addBotMessage(
          "What’s the weather like? Options: Rainy, Cold, Hot, or Mild. Share the forecast or type your preference for tailored advice!"
        );
        break;
      case "color":
        addBotMessage(
          "Color theory is the key to radiant style! 🌟 Are you exploring Seasonal Color Analysis (Warm/Cool Tones), Skin Tone Pairings, or 2025’s Trending Palettes? Let me know your focus!"
        );
        break;
      case "trends":
        addBotMessage(
          "2025 is all about bold elegance! 🌍 Trending now: earthy neutrals (terracotta, sage), soft pastels (lavender, mint), and vibrant neons (lime, fuchsia). Want tips on styling these or specific designer inspiration?"
        );
        break;
    }
  };

  const handleChat = (message) => {
    const text = message.toLowerCase();

    if (text.includes("hello") || text.includes("hi")) {
      addBotMessage(
        "Greetings, fashion aficionado! 😊 Let’s craft a look that turns heads. Select an option above or tell me about your style needs."
      );
    } else if (text.includes("party")) {
      addBotMessage(
        "Party glamour calls! 🎉 Opt for a Gucci sequined mini dress or a bold Versace suit with vibrant patterns. Pair with strappy Louboutin heels and a statement clutch. For 2025, add a neon fuchsia accessory for a trendy pop. What’s the party vibe?"
      );
    } else if (text.includes("wedding")) {
      addBotMessage(
        "A wedding demands elegance! 🌸 Try a flowing Elie Saab midi dress in sage green or soft lavender—2025’s chic pastels. Pair with delicate Jimmy Choo heels and pearl accents. Avoid white to honor the bride. Is this a day or evening event?"
      );
    } else if (text.includes("formal") || text.includes("meeting")) {
      addBotMessage(
        "Boardroom or black-tie? 💼 A tailored Armani blazer, crisp white shirt, and sleek trousers in charcoal or navy exude power. Add polished Prada loafers and a Cartier watch. For 2025, a terracotta tie adds a trendy twist. What’s the dress code?"
      );
    } else if (text.includes("casual")) {
      addBotMessage(
        "Effortless chic! 😌 Pair high-waisted Acne Studios jeans with a silk Reformation blouse in ivory. Finish with Veja sneakers and a Bottega Veneta crossbody. For 2025, a sage green scarf adds a trendy touch. Where are you headed?"
      );
    } else if (text.includes("rain") || text.includes("rainy")) {
      addBotMessage(
        "Rainy days, stylish ways! ☔ A Burberry trench in olive or navy, paired with Hunter boots, keeps you dry and dashing. Add a cashmere scarf in 2025’s trending mustard. Need an umbrella recommendation or outfit layering tips?"
      );
    } else if (text.includes("cold")) {
      addBotMessage(
        "Embrace the chill in style! 🧥 Layer a Max Mara wool coat over a cashmere turtleneck and tailored trousers. Add a Fendi scarf in earthy terracotta for 2025 flair. Boots by Stuart Weitzman seal the look. Indoor or outdoor plans?"
      );
    } else if (text.includes("hot") || text.includes("summer")) {
      addBotMessage(
        "Beat the heat with elegance! ☀️ A linen Zimmermann dress in mint or ivory, paired with Chloé sandals, screams summer 2025. Add a wide-brim hat and gold jewelry. Want tips for breathable fabrics or evening looks?"
      );
    } else if (text.includes("beach") || text.includes("vacation")) {
      addBotMessage(
        "Beachside sophistication! 🏖️ A flowing Missoni kaftan in coral or aqua, paired with Hermès sandals, is 2025 perfection. Add oversized sunglasses and a straw tote. Planning a resort dinner or casual stroll?"
      );
    } else if (text.includes("workout") || text.includes("gym")) {
      addBotMessage(
        "Fitness meets fashion! 💪 Choose Lululemon’s high-performance leggings and a breathable Alo Yoga tank. Add Nike sneakers with a neon lime accent—2025’s bold trend. Need gym-to-street styling tips?"
      );
    } else if (text.includes("color theory") || text.includes("seasonal color")) {
      addBotMessage(
        "Color theory is haute in 2025! 🌟 Seasonal analysis identifies your palette: Warm (Autumn/Summer) suits earthy tones like terracotta, olive, or mustard; Cool (Winter/Spring) shines in icy blues, lavender, or emerald. Want to explore your undertone or styling tips for these hues?"
      );
    } else if (text.includes("warm tone") || text.includes("autumn") || text.includes("summer palette")) {
      addBotMessage(
        "Warm tones are radiant in 2025! 🍂 Think rich terracotta, olive green, or mustard yellow—perfect for Autumn/Summer palettes. Try a Chloe dress in burnt orange with gold Bulgari jewelry. For texture, add suede or linen. Need outfit ideas or brand suggestions?"
      );
    } else if (text.includes("cool tone") || text.includes("winter") || text.includes("spring palette")) {
      addBotMessage(
        "Cool tones dazzle in 2025! ❄️ Icy blue, soft lavender, or emerald green suit Winter/Spring palettes. A Dior silk blouse in blush pink with silver Tiffany accents is divine. Opt for crisp fabrics like cotton or satin. Want specific styling tips?"
      );
    } else if (text.includes("skin tone") && text.includes("dark")) {
      addBotMessage(
        "Dark skin tones glow in vibrant hues! 💎 Jewel tones like emerald, ruby, or sapphire are timeless, while 2025’s mustard or terracotta add trendiness. Try a Balmain gown with gold accents for drama. Want evening or casual styling ideas?"
      );
    } else if (text.includes("trending color") || text.includes("2025 color")) {
      addBotMessage(
        "2025’s palette is a masterpiece! 🌟 Earthy neutrals (sage, terracotta), soft pastels (lavender, mint), and bold neons (lime, fuchsia) dominate. Pair a neutral base (e.g., beige Chanel skirt) with a neon Gucci scarf for balance. Need outfit inspiration or mixing tips?"
      );
    } else {
      addBotMessage(
        "I’m not sure I caught that, darling! 😊 Select an option above or tell me about your event, weather, or color preferences for a bespoke styling guide."
      );
    }
  };

  chatSend.addEventListener("click", () => {
    const message = chatInput.value.trim();
    if (message) {
      addUserMessage(message);
      handleChat(message);
      chatInput.value = "";
    }
  });

  chatInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      chatSend.click();
    }
  });
});