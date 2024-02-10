import * as alt from 'alt-client';
import * as game from 'natives';
import * as NativeUI from './includes/NativeUI/NativeUi.js';

var doorMenuBlacklist = [8, 13, 14, 21]

alt.on('keyup', (key) => {
  if (key === 116 && alt.Player.local.vehicle && !doorMenuBlacklist.includes(game.getVehicleClass(alt.Player.local.vehicle.scriptID))) {
    if (menu.Visible) {
      menu.Close();
    } else {
      menu.Open();
    }
  }
});


export function nativeNotify(text) {
  game.beginTextCommandThefeedPost( 'STRING' );
  game.addTextComponentSubstringPlayerName(text);
  game.endTextCommandThefeedPostTicker( false, true );
}

const menu = new NativeUI.Menu("Fahrzeug", "Verwalte dein Fahrzeug", new NativeUI.Point(70, 70));
menu.GetTitle().Scale = 0.9;
menu.GetTitle().DropShadow = true;
menu.AddItem(new NativeUI.UIMenuItem("Motorhaube", "Öffne deine Motorhaube"));
menu.AddItem(new NativeUI.UIMenuItem("Kofferaum", "Öffne deinen Kofferaum"));
menu.AddItem(new NativeUI.UIMenuItem("Fahrertür", "Öffne deine Fahrertür"));
menu.AddItem(new NativeUI.UIMenuItem("Beifahrertür", "Öffne deine Beifahrertür"));
menu.AddItem(new NativeUI.UIMenuItem("Fahrertür Hinten", "Öffne deine Fahrertür Hinten"));
menu.AddItem(new NativeUI.UIMenuItem("Beifahrertür Hinten", "Öffne deine Beifahrer Hinten"));

menu.ItemSelect.on((item) => {
  if (item.Text === "Motorhaube") {
    if (game.getVehicleIndividualDoorLockStatus(alt.Player.local.vehicle, 4) == 0) {
      game.setVehicleDoorOpen(alt.Player.local.vehicle, 4, false, false);
      game.setVehicleIndividualDoorsLocked(alt.Player.local.vehicle, 4, 2);
    } else {
      game.setVehicleDoorShut(alt.Player.local.vehicle, 4, false);
      game.setVehicleIndividualDoorsLocked(alt.Player.local.vehicle, 4, 0);
    }
  } else if (item.Text === "Kofferaum") {
    if (game.getVehicleIndividualDoorLockStatus(alt.Player.local.vehicle, 5) == 0) {
      game.setVehicleDoorOpen(alt.Player.local.vehicle, 5, false, false);
      game.setVehicleIndividualDoorsLocked(alt.Player.local.vehicle, 5, 2);
    } else {
        game.setVehicleDoorShut(alt.Player.local.vehicle, 5, false);
        game.setVehicleIndividualDoorsLocked(alt.Player.local.vehicle, 5, 0);
    }
  }
  else if (item.Text === "Fahrertür") {
    if (game.getVehicleIndividualDoorLockStatus(alt.Player.local.vehicle, 0) == 0) {
      game.setVehicleDoorOpen(alt.Player.local.vehicle, 0, false, false);
      game.setVehicleIndividualDoorsLocked(alt.Player.local.vehicle, 0, 2);
    } else {
      game.setVehicleDoorShut(alt.Player.local.vehicle, 0, false);
      game.setVehicleIndividualDoorsLocked(alt.Player.local.vehicle, 0, 0);
    }
  }
  else if (item.Text === "Beifahrertür") {
    if (game.getVehicleIndividualDoorLockStatus(alt.Player.local.vehicle, 1) == 0) {
      game.setVehicleDoorOpen(alt.Player.local.vehicle, 1, false, false);
      game.setVehicleIndividualDoorsLocked(alt.Player.local.vehicle, 1, 2);
    } else {
      game.setVehicleDoorShut(alt.Player.local.vehicle, 1, false);
      game.setVehicleIndividualDoorsLocked(alt.Player.local.vehicle, 1, 0);
    }
  }
  else if (item.Text === "Fahrertür Hinten") {
    if (game.getVehicleIndividualDoorLockStatus(alt.Player.local.vehicle, 2) == 0) {
      game.setVehicleDoorOpen(alt.Player.local.vehicle, 2, false, false);
      game.setVehicleIndividualDoorsLocked(alt.Player.local.vehicle, 2, 2);
    } else {
      game.setVehicleDoorShut(alt.Player.local.vehicle, 2, false);
      game.setVehicleIndividualDoorsLocked(alt.Player.local.vehicle, 2, 0);
    }
  }
  else if (item.Text === "Beifahrertür Hinten") {
    if (game.getVehicleIndividualDoorLockStatus(alt.Player.local.vehicle, 3) == 0) {
      game.setVehicleDoorOpen(alt.Player.local.vehicle, 3, false, false);
      game.setVehicleIndividualDoorsLocked(alt.Player.local.vehicle, 3, 2);
    } else {
      game.setVehicleDoorShut(alt.Player.local.vehicle, 3, false);
      game.setVehicleIndividualDoorsLocked(alt.Player.local.vehicle, 3, 0);
    }
  } 
});
