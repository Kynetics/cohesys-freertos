var a00014 =
[
    [ "i2c_master_config_t", "a00014.html#a00133", [
      [ "enableMaster", "a00014.html#a2419131a10906475fd31950f17ac8895", null ],
      [ "baudRate_Bps", "a00014.html#a2186844dc87bcde999fc12005f4c550a", null ]
    ] ],
    [ "i2c_master_transfer_t", "a00014.html#a00134", [
      [ "flags", "a00014.html#a8835787e1b0f9a4b8868e7cbe53e45d5", null ],
      [ "slaveAddress", "a00014.html#a3b9c4ae818b1194955db51de0f67795f", null ],
      [ "direction", "a00014.html#ac5b89dc9115b7760431c981e0c1fd443", null ],
      [ "subaddress", "a00014.html#ae7facb612714785d4e143e57d47a5af3", null ],
      [ "subaddressSize", "a00014.html#a9c08797f65f0faac78f44ac038c45c38", null ],
      [ "data", "a00014.html#a0b4fa495c845d29fe6eaad7350337943", null ],
      [ "dataSize", "a00014.html#a071d26432bea08e4bf76bb4eb8805770", null ]
    ] ],
    [ "i2c_master_handle_t", "a00014.html#a00114", [
      [ "transfer", "a00014.html#a6858d3525f762d7aded20e6c95eb19fc", null ],
      [ "transferSize", "a00014.html#a5f6e3613a1fe8c3534a31526b1a34647", null ],
      [ "state", "a00014.html#add7ec18bc8239c5c87ffcec2fbcf5dd8", null ],
      [ "completionCallback", "a00014.html#a15b84b8a94c2b2e5ace0a695c79edd84", null ],
      [ "userData", "a00014.html#aad7df570c53adb2e80acd2ba0d39d109", null ]
    ] ],
    [ "i2c_slave_config_t", "a00014.html#a00135", [
      [ "enableSlave", "a00014.html#a92d20835618a946b8f7702455877ef7a", null ],
      [ "slaveAddress", "a00014.html#a05851e26565e2b89bd49ef230cc397be", null ]
    ] ],
    [ "i2c_slave_transfer_t", "a00014.html#a00136", [
      [ "event", "a00014.html#ad0a9e837e9df16d89bab98a78af5bd10", null ],
      [ "data", "a00014.html#ae8dab4de2445f3094b6baef3712a80a9", null ],
      [ "dataSize", "a00014.html#a96d433bce400dfc4917343f2b07e8b1d", null ],
      [ "completionStatus", "a00014.html#a35adbf64ca65dd2c1b52f9260f5b9e90", null ],
      [ "transferredCount", "a00014.html#a0394563c8d0f9eeeecd242a65cee2ad4", null ]
    ] ],
    [ "i2c_slave_handle_t", "a00014.html#a00115", [
      [ "state", "a00014.html#a05e28c7ba871cce0a3dd1bad4b768336", null ],
      [ "transfer", "a00014.html#a49f6e4eb57b2158f3886f47e6c84d1b9", null ],
      [ "eventMask", "a00014.html#a8ab7d35b42a241c05ddb4c18f8d1e522", null ],
      [ "callback", "a00014.html#a7229e894f762ead4bd08b4add49e6bc2", null ],
      [ "userData", "a00014.html#a98ea5e99278b386e2ddb99d45a9750ee", null ]
    ] ],
    [ "FSL_I2C_DRIVER_VERSION", "a00014.html#ga60fdaec284298758a650ce1122aef231", null ],
    [ "I2C_RETRY_TIMES", "a00014.html#gaac288786aaa7d0cb947c91591baf42d7", null ],
    [ "i2c_master_transfer_callback_t", "a00014.html#ga1c6e059706357c744c165ce7ecd1c185", null ],
    [ "i2c_slave_transfer_callback_t", "a00014.html#ga974310ded85af5ef341811d542db650c", [
      [ "kStatus_I2C_Busy", "a00014.html#gga61dadd085c1777f559549e05962b2c9ea49091894b590d7e479605bf113918952", null ],
      [ "kStatus_I2C_Idle", "a00014.html#gga61dadd085c1777f559549e05962b2c9ea628d242f7bc0e3d5949c7f73eafaa508", null ],
      [ "kStatus_I2C_Nak", "a00014.html#gga61dadd085c1777f559549e05962b2c9ea72fd33d0b5263a63766e62f71d16be00", null ],
      [ "kStatus_I2C_ArbitrationLost", "a00014.html#gga61dadd085c1777f559549e05962b2c9ea139b52cc3305ec2c06d0ac94313c221f", null ],
      [ "kStatus_I2C_Timeout", "a00014.html#gga61dadd085c1777f559549e05962b2c9ea81ad7cc198436cabbe91ea55c5288747", null ],
      [ "kStatus_I2C_Addr_Nak", "a00014.html#gga61dadd085c1777f559549e05962b2c9eadf7437bfedcc0d57338ed33f1be5c805", null ]
    ] ],
    [ "_i2c_flags", "a00014.html#ga1f1337bbe9d0b184d9dcee31f9ebade2", [
      [ "kI2C_ReceiveNakFlag", "a00014.html#gga1f1337bbe9d0b184d9dcee31f9ebade2a4c3c2928e17ddbfbc1c346c6b9a8dccd", null ],
      [ "kI2C_IntPendingFlag", "a00014.html#gga1f1337bbe9d0b184d9dcee31f9ebade2a647d0b1d1f9514ad483bef3ea3926c3b", null ],
      [ "kI2C_TransferDirectionFlag", "a00014.html#gga1f1337bbe9d0b184d9dcee31f9ebade2a249f698970909f33b1b96139c05bd969", null ],
      [ "kI2C_ArbitrationLostFlag", "a00014.html#gga1f1337bbe9d0b184d9dcee31f9ebade2a39fab5ef04e74d00ef4c4574899ab589", null ],
      [ "kI2C_BusBusyFlag", "a00014.html#gga1f1337bbe9d0b184d9dcee31f9ebade2a37fb20742a15a63c1bc2551b997cdcff", null ],
      [ "kI2C_AddressMatchFlag", "a00014.html#gga1f1337bbe9d0b184d9dcee31f9ebade2a10cd5797b1b8f809192423486a85d5fe", null ],
      [ "kI2C_TransferCompleteFlag", "a00014.html#gga1f1337bbe9d0b184d9dcee31f9ebade2adb8f10365dfc2a3e849f05173fa4d83e", null ]
    ] ],
    [ "_i2c_interrupt_enable", "a00014.html#ga87c81dd985dad07dc26cb93125a94ec7", [
      [ "kI2C_GlobalInterruptEnable", "a00014.html#gga87c81dd985dad07dc26cb93125a94ec7a5526e27ef6e8317ba928849da890b3b2", null ]
    ] ],
    [ "i2c_direction_t", "a00014.html#gab49c827b45635206f06e5737606e4611", [
      [ "kI2C_Write", "a00014.html#ggab49c827b45635206f06e5737606e4611a93b476b469c2a4bfed5916b458ae9bb0", null ],
      [ "kI2C_Read", "a00014.html#ggab49c827b45635206f06e5737606e4611a3a7bb24dc8d1c1be8925603eeafe9b30", null ]
    ] ],
    [ "_i2c_master_transfer_flags", "a00014.html#ga87ea07668194cfb46c7c368d2cb42433", [
      [ "kI2C_TransferDefaultFlag", "a00014.html#gga87ea07668194cfb46c7c368d2cb42433ae80f7b768b1621e42ac965d3d23de5e2", null ],
      [ "kI2C_TransferNoStartFlag", "a00014.html#gga87ea07668194cfb46c7c368d2cb42433a5cb44bf860c0482c0ca0165cf0d31d8a", null ],
      [ "kI2C_TransferRepeatedStartFlag", "a00014.html#gga87ea07668194cfb46c7c368d2cb42433aadf112471ef12f194985a093cd9b9721", null ],
      [ "kI2C_TransferNoStopFlag", "a00014.html#gga87ea07668194cfb46c7c368d2cb42433afb8aeea71b5b7475e3d3df86220db566", null ]
    ] ],
    [ "i2c_slave_transfer_event_t", "a00014.html#gac53e5c96a2eed1b5a95b7d84be48f4ac", [
      [ "kI2C_SlaveAddressMatchEvent", "a00014.html#ggac53e5c96a2eed1b5a95b7d84be48f4acacb1ae174dd6798a6fd79800a9e39a3c6", null ],
      [ "kI2C_SlaveTransmitEvent", "a00014.html#ggac53e5c96a2eed1b5a95b7d84be48f4aca2f85039a57379838909876a1d509b7aa", null ],
      [ "kI2C_SlaveReceiveEvent", "a00014.html#ggac53e5c96a2eed1b5a95b7d84be48f4acaac8593e808a8137d1b5d3a51640779de", null ],
      [ "kI2C_SlaveTransmitAckEvent", "a00014.html#ggac53e5c96a2eed1b5a95b7d84be48f4aca43c045da27fa60e7a0540c743eca4e79", null ],
      [ "kI2C_SlaveCompletionEvent", "a00014.html#ggac53e5c96a2eed1b5a95b7d84be48f4aca38cca3cd668e73f51b8e574835d419df", null ],
      [ "kI2C_SlaveAllEvents", "a00014.html#ggac53e5c96a2eed1b5a95b7d84be48f4aca94b030ebdac378a84961893ae567bfbc", null ]
    ] ],
    [ "I2C_MasterInit", "a00014.html#ga29f967b3ae8487a36ba2a58deb01ccae", null ],
    [ "I2C_MasterDeinit", "a00014.html#gadcf7122f0a38d4d9da0f052fcb167957", null ],
    [ "I2C_MasterGetDefaultConfig", "a00014.html#gad69f2d63ea756dda60749ff6b09f587d", null ],
    [ "I2C_SlaveInit", "a00014.html#gae6e155a5aadb43d527418e2965e39123", null ],
    [ "I2C_SlaveDeinit", "a00014.html#gadb50014db29dd75ea2001fb7bc837e77", null ],
    [ "I2C_SlaveGetDefaultConfig", "a00014.html#ga7115f80e28b62bbbd3be1a2a918529ba", null ],
    [ "I2C_Enable", "a00014.html#gaaaaab1e83cb8c6117046bdb5bcbf9ac6", null ],
    [ "I2C_MasterGetStatusFlags", "a00014.html#ga8219cf80c3be6c15fc5035326b7f62dc", null ],
    [ "I2C_MasterClearStatusFlags", "a00014.html#ga437271ffb955b77df0a5dee9ea80cc63", null ],
    [ "I2C_SlaveGetStatusFlags", "a00014.html#gac2794e138d94d9b6a761c074ad0899cd", null ],
    [ "I2C_SlaveClearStatusFlags", "a00014.html#ga545c1a43d8d49c4675de493d45a4063a", null ],
    [ "I2C_EnableInterrupts", "a00014.html#ga577e094cc4d39b88ec5bbe49bc199c77", null ],
    [ "I2C_DisableInterrupts", "a00014.html#ga9839c1fd49a0f62f42b0adfa74f62853", null ],
    [ "I2C_MasterSetBaudRate", "a00014.html#gafeab1d5249a8b39c8d9e1a54a85c23f0", null ],
    [ "I2C_MasterStart", "a00014.html#ga7664234966e4162e952b6d57efcaa8a6", null ],
    [ "I2C_MasterStop", "a00014.html#gaf46a8cc094fc18c6cadea8de71448723", null ],
    [ "I2C_MasterRepeatedStart", "a00014.html#ga42ff265d25e713326c7d152adf350147", null ],
    [ "I2C_MasterWriteBlocking", "a00014.html#gac4e1a954243aa852cb4d358e90091efd", null ],
    [ "I2C_MasterReadBlocking", "a00014.html#gaf77526f32a16109abf265dbb022a26ba", null ],
    [ "I2C_SlaveWriteBlocking", "a00014.html#ga280404c6b1ede542f2c1c20bd382869c", null ],
    [ "I2C_SlaveReadBlocking", "a00014.html#ga89baaf8bc82b19c837032665e89a1707", null ],
    [ "I2C_MasterTransferBlocking", "a00014.html#ga35cae3a5b4aa50ce8db28e3eb703a027", null ],
    [ "I2C_MasterTransferCreateHandle", "a00014.html#ga31e3de02b57801c6896e6045c4a31268", null ],
    [ "I2C_MasterTransferNonBlocking", "a00014.html#gac7f76a04b6f6873c52ad176d58901fe9", null ],
    [ "I2C_MasterTransferGetCount", "a00014.html#ga7d720842e68161d2d52d56d119f20665", null ],
    [ "I2C_MasterTransferAbort", "a00014.html#gabb386e53b2bc64e29b2915bdfac36800", null ],
    [ "I2C_MasterTransferHandleIRQ", "a00014.html#gad091cd1857d2bd8ce64583739b3a35d5", null ],
    [ "I2C_SlaveTransferCreateHandle", "a00014.html#gac9b90f575d92ff8ad3cc350a5c8ad1b9", null ],
    [ "I2C_SlaveTransferNonBlocking", "a00014.html#gaa387d81ea08a9d4b39cfeb3dfec505f7", null ],
    [ "I2C_SlaveTransferAbort", "a00014.html#ga5ae9f5e6e854d14d33ba3029128bd6f0", null ],
    [ "I2C_SlaveTransferGetCount", "a00014.html#gabf38a498bd3527ea0b7cc947ae71e17e", null ],
    [ "I2C_SlaveTransferHandleIRQ", "a00014.html#ga097c0b20503381de44cccba311dcf236", null ]
];