(function() {
alert("You can get banned use at your own risk.\n\nMenu By Cid\n\nCheats Made by rxzyx on github")  
  const menu = document.createElement('div');
    menu.style.position = 'fixed';
    menu.style.top = '20px';
    menu.style.left = '20px'; 
    menu.style.zIndex = '9999';
    menu.style.background = '#2c3e50';
    menu.style.border = '2px solid #3498db';
    menu.style.borderRadius = '10px';
    menu.style.padding = '10px';
    menu.style.color = '#ecf0f1';
    menu.style.fontFamily = 'Arial, sans-serif';
    menu.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    menu.style.cursor = 'grab';
    menu.id = 'prodigyMenu';

    menu.innerHTML = `
        <div id="menuHeader" style="cursor: grab; display: flex; align-items: center;">
            <img id="menuToggle" 
                 src="https://upload.wikimedia.org/wikipedia/commons/a/aa/Prodigy_icon_2020.svg" 
                 alt="Prodigy Hack Menu" 
                 draggable="false" 
                 style="width: 40px; height: 40px; cursor: pointer; margin-right: 10px;">
            <h3 id="menuTitle" style="margin: 0; font-size: 16px; color: white;">Prodigy Hack Menu</h3>
        </div>
        <div id="menuContent" style="margin-top: 10px;">
            <button id="battleCategory" style="margin: 5px; padding: 5px 10px; background: #3498db; border: none; color: white; border-radius: 5px;">Battle</button>
            <button id="playerCategory" style="margin: 5px; padding: 5px 10px; background: #3498db; border: none; color: white; border-radius: 5px;">Player</button>
            <div id="battleButtons" style="display: none; margin-top: 10px;">
                <button id="Fetch Link 1" style="margin: 5px; padding: 5px 10px; background: #3498db; border: none; color: white; border-radius: 5px;">Damage Hack</button>
                <button id="Fetch Link 2" style="margin: 5px; padding: 5px 10px; background: #3498db; border: none; color: white; border-radius: 5px;">Fill Energy</button>
                <button id="BattleButton3" style="margin: 5px; padding: 5px 10px; background: #3498db; border: none; color: white; border-radius: 5px;">Invincibility Hack</button>
            </div>
            <div id="playerButtons" style="display: none; margin-top: 10px;">
                <button id="playerButton1" style="margin: 5px; padding: 5px 10px; background: #3498db; border: none; color: white; border-radius: 5px;">Edit Level</button>
                <button id="playerButton2" style="margin: 5px; padding: 5px 10px; background: #3498db; border: none; color: white; border-radius: 5px;">Free Membership</button>
                <button id="playerButton3" style="margin: 5px; padding: 5px 10px; background: #3498db; border: none; color: white; border-radius: 5px;">Get Gold</button>
                <button id="playerButton4" style="margin: 5px; padding: 5px 10px; background: #3498db; border: none; color: white; border-radius: 5px;">Morph Forever</button>
                <button id="playerButton5" style="margin: 5px; padding: 5px 10px; background: #3498db; border: none; color: white; border-radius: 5px;">Reset Account</button>
                <button id="playerButton6" style="margin: 5px; padding: 5px 10px; background: #3498db; border: none; color: white; border-radius: 5px;">Set Grade</button>
                <button id="playerButton7" style="margin: 5px; padding: 5px 10px; background: #3498db; border: none; color: white; border-radius: 5px;">Set Health</button>
                <button id="playerButton8" style="margin: 5px; padding: 5px 10px; background: #3498db; border: none; color: white; border-radius: 5px;">Set Tower</button>
                <button id="playerButton9" style="margin: 5px; padding: 5px 10px; background: #3498db; border: none; color: white; border-radius: 5px;">Skip Tutorial</button>
                <button id="playerButton10" style="margin: 5px; padding: 5px 10px; background: #3498db; border: none; color: white; border-radius: 5px;">Spam Effects On People</button>
                <button id="playerButton11" style="margin: 5px; padding: 5px 10px; background: #3498db; border: none; color: white; border-radius: 5px;">Unlimited Effects</button>
                <button id="playerButton12" style="margin: 5px; padding: 5px 10px; background: #3498db; border: none; color: white; border-radius: 5px;">Unlimited Effects</button>
                <button id="playerButton13" style="margin: 5px; padding: 5px 10px; background: #3498db; border: none; color: white; border-radius: 5px;">Unlock Pets</button>
                <button id="playerButton14" style="margin: 5px; padding: 5px 10px; background: #3498db; border: none; color: white; border-radius: 5px;">Walk Anywhere</button>
                <button id="playerButton15" style="margin: 5px; padding: 5px 10px; background: #3498db; border: none; color: white; border-radius: 5px;">Walk Speed</button>
            </div>
            <button id="closeMenu" style="margin: 5px; padding: 5px 10px; background: #e74c3c; border: none; color: white; border-radius: 5px;">Close</button>
        </div>
    `;
    document.body.appendChild(menu);

    const menuContent = document.getElementById('menuContent');
    const menuTitle = document.getElementById('menuTitle');
    const menuToggle = document.getElementById('menuToggle');
    const battleCategory = document.getElementById('battleCategory');
    const playerCategory = document.getElementById('playerCategory'); 
    const battleButtons = document.getElementById('battleButtons');
    const playerButtons = document.getElementById('playerButtons');
    const closeMenu = document.getElementById('closeMenu');

    let isMinimized = false;

    battleCategory.addEventListener('click', () => {
        battleButtons.style.display = battleButtons.style.display === 'none' ? 'block' : 'none';
        playerButtons.style.display = 'none'; 
    });

    playerCategory.addEventListener('click', () => {
        playerButtons.style.display = playerButtons.style.display === 'none' ? 'block' : 'none';
        battleButtons.style.display = 'none'; 
    });

    closeMenu.addEventListener('click', () => {
        menu.remove();
    });

  const fetchButtons = document.querySelectorAll('#battleButtons button, #playerButtons button'); 
fetchButtons.forEach((button, index) => {
    button.addEventListener('click', () => {

        fetch('https://raw.githubusercontent.com/CidCaribou/Prodigy-menu/refs/heads/main/buttonsmain.js') 
            .then(response => response.json())
            .then(data => {
                const scriptUrl = data[index].scriptUrl; 
                if (scriptUrl) {
                    const scriptElement = document.createElement('script');
                    scriptElement.src = scriptUrl;
                    scriptElement.onload = () => {
                        console.log(`Script loaded from: ${scriptUrl}`);
                    };
                    scriptElement.onerror = () => {
                        console.error(`Error loading script from: ${scriptUrl}`);
                    };
                    document.body.appendChild(scriptElement);
                } else {
                    console.error(`No script URL found for button index ${index}`);
                }
            })
            .catch(error => {
                console.error('Error fetching script:', error);
            });
    });
});

    let isMouseDown = false;
    let isDragging = false;
    let wasClicked = false;

    menuToggle.addEventListener('click', (e) => {
        if (wasClicked && !isDragging) {
            isMinimized = !isMinimized;
            menuContent.style.display = isMinimized ? 'none' : 'block';
            menuTitle.style.display = isMinimized ? 'none' : 'block';
            wasClicked = false;
        }
    });

    const header = document.getElementById('menuHeader');
    let startX, startY, offsetX, offsetY;

    header.addEventListener('mousedown', (e) => {
        isMouseDown = true;
        wasClicked = true;
        e.preventDefault();
        startX = e.clientX;
        startY = e.clientY;
        const rect = menu.getBoundingClientRect();
        offsetX = rect.left;
        offsetY = rect.top;

        menu.style.cursor = 'grabbing';

        const onMouseMove = (e) => {
            isDragging = true;
            const dx = e.clientX - startX;
            const dy = e.clientY - startY;
            menu.style.left = `${offsetX + dx}px`;
            menu.style.top = `${offsetY + dy}px`;
            wasClicked = false;
        };

        const onMouseUp = () => {
            isMouseDown = false;
            isDragging = false;
            menu.style.cursor = 'grab';
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    });
})();
