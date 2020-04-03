var a00029 =
[
    [ "uart_config_t", "a00029.html#a00178", [
      [ "baudRate_Bps", "a00029.html#gacc123668836f3432c54ee6a2f6f318f1", null ],
      [ "parityMode", "a00029.html#ga1a3abcf4f0f5d0a3893df14f2991aa39", null ],
      [ "dataBitsCount", "a00029.html#gaa026642db643d8cae1a64869acd9baf5", null ],
      [ "stopBitCount", "a00029.html#gadf6e33c13910e9ec7c2688f83a462be0", null ],
      [ "txFifoWatermark", "a00029.html#ga5eb9ab81752080bc726b8d625d2b6b21", null ],
      [ "rxFifoWatermark", "a00029.html#ga1bb7b2f0f7df79977d33be264fb5163a", null ],
      [ "enableAutoBaudRate", "a00029.html#gac595435b68632c2dbaece764c54cd41d", null ],
      [ "enableTx", "a00029.html#ga91d575902455699a312c64b564133a8d", null ],
      [ "enableRx", "a00029.html#gaa045acd340fc86d70a497f49e0a95bdd", null ]
    ] ],
    [ "uart_transfer_t", "a00029.html#a00180", [
      [ "data", "a00029.html#gaf91f05b0f951836e3002f60f0575f369", null ],
      [ "dataSize", "a00029.html#ga21820f8294de0d75d863b72512a7c12f", null ]
    ] ],
    [ "uart_handle_t", "a00029.html#a00121", [
      [ "txData", "a00029.html#ga046372eac11f58a16f519c0ee264ea9e", null ],
      [ "txDataSize", "a00029.html#ga1e67a92b463ad328646834ea0de4d70d", null ],
      [ "txDataSizeAll", "a00029.html#ga80361474eb03b3aa30d02bda82adce65", null ],
      [ "rxData", "a00029.html#ga5c87354702502998d3ccca9d9bfd3069", null ],
      [ "rxDataSize", "a00029.html#ga46bd84d885004806f89744ad79edd81e", null ],
      [ "rxDataSizeAll", "a00029.html#ga800a05d5ea3c6240daad46f466a8fea4", null ],
      [ "rxRingBuffer", "a00029.html#gafeba8b549facc329937046e734681963", null ],
      [ "rxRingBufferSize", "a00029.html#ga8d6afed4b64233c959a180b66686c14c", null ],
      [ "rxRingBufferHead", "a00029.html#ga85d061606b31401fb4a9d0e22e77056c", null ],
      [ "rxRingBufferTail", "a00029.html#ga9f4482059188bea2603b1c07cf9cc084", null ],
      [ "callback", "a00029.html#ga2ef9706e8203ba72fa1e04c48581fb0f", null ],
      [ "userData", "a00029.html#ga69ce1fdb7a2f60c0ecc94c4d1b2ed6ff", null ],
      [ "txState", "a00029.html#ga9fa8f119b6e0e3a7805fb25edafb1498", null ],
      [ "rxState", "a00029.html#ga5aa95f3d2cb81a8bb01a11ab2cf66234", null ]
    ] ],
    [ "FSL_UART_DRIVER_VERSION", "a00029.html#ga89f9649bfe350eb7b1e53146f35d3de5", null ],
    [ "uart_transfer_callback_t", "a00029.html#gaf164fa4e12ff8a3e3f3997512001e007", [
      [ "kStatus_UART_TxBusy", "a00029.html#gga0411cd49bb5b71852cecd93bcbf0ca2da19ddee4fe5963467600028b78fb468e7", null ],
      [ "kStatus_UART_RxBusy", "a00029.html#gga0411cd49bb5b71852cecd93bcbf0ca2da68cf23f981c4b85f82291163fbb2a5e6", null ],
      [ "kStatus_UART_TxIdle", "a00029.html#gga0411cd49bb5b71852cecd93bcbf0ca2daf36c829b1b889517bf775c0d7ce29fa6", null ],
      [ "kStatus_UART_RxIdle", "a00029.html#gga0411cd49bb5b71852cecd93bcbf0ca2dae0877b14627ed2aa8ddb2bf5b033f407", null ],
      [ "kStatus_UART_TxWatermarkTooLarge", "a00029.html#gga0411cd49bb5b71852cecd93bcbf0ca2da765913f003819ed87b861d187bf79ab8", null ],
      [ "kStatus_UART_RxWatermarkTooLarge", "a00029.html#gga0411cd49bb5b71852cecd93bcbf0ca2da720cefde05389830f35f6e6df6f6ac67", null ],
      [ "kStatus_UART_FlagCannotClearManually", "a00029.html#gga0411cd49bb5b71852cecd93bcbf0ca2da5ee8e23fc9ab20cf366942751b895f54", null ],
      [ "kStatus_UART_Error", "a00029.html#gga0411cd49bb5b71852cecd93bcbf0ca2da950972a9e2ebbaa13c92e8f5a51f785d", null ],
      [ "kStatus_UART_RxRingBufferOverrun", "a00029.html#gga0411cd49bb5b71852cecd93bcbf0ca2da2e5b644b1e10c426af818bc78657e992", null ],
      [ "kStatus_UART_RxHardwareOverrun", "a00029.html#gga0411cd49bb5b71852cecd93bcbf0ca2dab6b1fd6c2deec25992449f5b12303a26", null ],
      [ "kStatus_UART_NoiseError", "a00029.html#gga0411cd49bb5b71852cecd93bcbf0ca2dae4ef4df9a5f756ccf1b4bf08292ec2fb", null ],
      [ "kStatus_UART_FramingError", "a00029.html#gga0411cd49bb5b71852cecd93bcbf0ca2daa7aa134f85df3d5863ca962ce1ea7ee0", null ],
      [ "kStatus_UART_ParityError", "a00029.html#gga0411cd49bb5b71852cecd93bcbf0ca2daea20b2588c38f259f1412aa7132c9ef8", null ],
      [ "kStatus_UART_BaudrateNotSupport", "a00029.html#gga0411cd49bb5b71852cecd93bcbf0ca2dae6cdb41e1b49958f57727cd47afd69b2", null ],
      [ "kStatus_UART_BreakDetect", "a00029.html#gga0411cd49bb5b71852cecd93bcbf0ca2da43540408a2faf9ce9e8e8c940bddd456", null ]
    ] ],
    [ "uart_data_bits_t", "a00029.html#gadc68b8fd9ded3990f84129df23fee798", [
      [ "kUART_SevenDataBits", "a00029.html#ggadc68b8fd9ded3990f84129df23fee798ab8c89dfed11b0628f58344705d4b0fb8", null ],
      [ "kUART_EightDataBits", "a00029.html#ggadc68b8fd9ded3990f84129df23fee798a2d77888a8dd82a66fb7bd86e51b4127c", null ]
    ] ],
    [ "uart_parity_mode_t", "a00029.html#ga436e5a7bdb5f24decb5bfb0c87a83ff4", [
      [ "kUART_ParityDisabled", "a00029.html#gga436e5a7bdb5f24decb5bfb0c87a83ff4a97e2feae6671a6de1126ebc2edf4606b", null ],
      [ "kUART_ParityEven", "a00029.html#gga436e5a7bdb5f24decb5bfb0c87a83ff4a9e68fe3aba46e045bee5433ed098bff0", null ],
      [ "kUART_ParityOdd", "a00029.html#gga436e5a7bdb5f24decb5bfb0c87a83ff4ae48c7fabc9babf1be626ebeb2627a54c", null ]
    ] ],
    [ "uart_stop_bit_count_t", "a00029.html#gaca4f14d23735c6afefb76cbee18e1db6", [
      [ "kUART_OneStopBit", "a00029.html#ggaca4f14d23735c6afefb76cbee18e1db6a5a8829a108d8a46abb097a36cde051a7", null ],
      [ "kUART_TwoStopBit", "a00029.html#ggaca4f14d23735c6afefb76cbee18e1db6a9704b3ae3ee851acf324eb357f75ab56", null ]
    ] ],
    [ "uart_idle_condition_t", "a00029.html#gac1d3d36674ef10ea596df09cd1ac4834", [
      [ "kUART_IdleFor4Frames", "a00029.html#ggac1d3d36674ef10ea596df09cd1ac4834a5b39a550a12fb82364e14867ba800df6", null ],
      [ "kUART_IdleFor8Frames", "a00029.html#ggac1d3d36674ef10ea596df09cd1ac4834ad1a880a7b8d05eabd494ad0a9154555d", null ],
      [ "kUART_IdleFor16Frames", "a00029.html#ggac1d3d36674ef10ea596df09cd1ac4834a2379458f47b103178be8e3265e02fa28", null ],
      [ "kUART_IdleFor32Frames", "a00029.html#ggac1d3d36674ef10ea596df09cd1ac4834a12f80ba050b8a679e22b92d5e4e163e7", null ]
    ] ],
    [ "_uart_interrupt_enable", "a00029.html#ga700f3cd8e3800273a1591307cab6311c", null ],
    [ "_uart_flags", "a00029.html#ga259a53f363288115306a45d08fc66eb8", [
      [ "kUART_RxCharReadyFlag", "a00029.html#gga259a53f363288115306a45d08fc66eb8a309643dfba0c44efc0600c02af6eaebf", null ],
      [ "kUART_RxErrorFlag", "a00029.html#gga259a53f363288115306a45d08fc66eb8a792f36da4b89b615ad2d20e05ccb4232", null ],
      [ "kUART_RxOverrunErrorFlag", "a00029.html#gga259a53f363288115306a45d08fc66eb8a310a961508b63dfe3d8d996400ce410c", null ],
      [ "kUART_RxFrameErrorFlag", "a00029.html#gga259a53f363288115306a45d08fc66eb8a088d4fcbbbe8a99aebe86debca4a97c2", null ],
      [ "kUART_RxBreakDetectFlag", "a00029.html#gga259a53f363288115306a45d08fc66eb8af76e33f2ae98819b0fdb938a96a3c7e9", null ],
      [ "kUART_RxParityErrorFlag", "a00029.html#gga259a53f363288115306a45d08fc66eb8aff287d5d8a910bd392c626f0b51a8ef0", null ],
      [ "kUART_ParityErrorFlag", "a00029.html#gga259a53f363288115306a45d08fc66eb8a0c92973ab1d527115fa01934c62a053d", null ],
      [ "kUART_RtsStatusFlag", "a00029.html#gga259a53f363288115306a45d08fc66eb8ac7e88bad028598aab3b9821b9a2e0267", null ],
      [ "kUART_TxReadyFlag", "a00029.html#gga259a53f363288115306a45d08fc66eb8a3913198655fd8ce2eb451d0550619d32", null ],
      [ "kUART_RtsDeltaFlag", "a00029.html#gga259a53f363288115306a45d08fc66eb8ab6a18a71d4711614848e0abfa114d48d", null ],
      [ "kUART_EscapeFlag", "a00029.html#gga259a53f363288115306a45d08fc66eb8a3446413cf0ba110c3f25e869ec723253", null ],
      [ "kUART_FrameErrorFlag", "a00029.html#gga259a53f363288115306a45d08fc66eb8a869aae50c5c1970a098d17c8ce7b844c", null ],
      [ "kUART_RxReadyFlag", "a00029.html#gga259a53f363288115306a45d08fc66eb8a50a2cc679d220e394c538803af4e287e", null ],
      [ "kUART_AgingTimerFlag", "a00029.html#gga259a53f363288115306a45d08fc66eb8a95a6f29cdead568e08951974a708a77f", null ],
      [ "kUART_DtrDeltaFlag", "a00029.html#gga259a53f363288115306a45d08fc66eb8a58c55093c621cb30ff7db3dca0fb3fe9", null ],
      [ "kUART_RxDsFlag", "a00029.html#gga259a53f363288115306a45d08fc66eb8adab01f057c6ed194fa44d0efc64ae15c", null ],
      [ "kUART_tAirWakeFlag", "a00029.html#gga259a53f363288115306a45d08fc66eb8a18f1130c93e0cb2033841dc9686129a3", null ],
      [ "kUART_AwakeFlag", "a00029.html#gga259a53f363288115306a45d08fc66eb8afec67475e7606d8612d8df8ba6273728", null ],
      [ "kUART_Rs485SlaveAddrMatchFlag", "a00029.html#gga259a53f363288115306a45d08fc66eb8a49554d7b7783b495061c5cfc579250f8", null ],
      [ "kUART_AutoBaudFlag", "a00029.html#gga259a53f363288115306a45d08fc66eb8a89cdd9c043992663c2072079684d1f33", null ],
      [ "kUART_TxEmptyFlag", "a00029.html#gga259a53f363288115306a45d08fc66eb8a38300abd304436626e61b70f216f8865", null ],
      [ "kUART_DtrFlag", "a00029.html#gga259a53f363288115306a45d08fc66eb8a257bc03110bc5ebf9b2fbb50c144b320", null ],
      [ "kUART_IdleFlag", "a00029.html#gga259a53f363288115306a45d08fc66eb8aab7d8fe2ab1cd29f7e27ff59fc6cd44e", null ],
      [ "kUART_AutoBaudCntStopFlag", "a00029.html#gga259a53f363288115306a45d08fc66eb8ad1ffb9b804eef7907a061b67672563ac", null ],
      [ "kUART_RiDeltaFlag", "a00029.html#gga259a53f363288115306a45d08fc66eb8a2e0e3b65dd4ad1e0d9d4fc75802e6bd8", null ],
      [ "kUART_RiFlag", "a00029.html#gga259a53f363288115306a45d08fc66eb8a989877e611df5363fb1b9f2f35a10379", null ],
      [ "kUART_IrFlag", "a00029.html#gga259a53f363288115306a45d08fc66eb8a2d7ecd6806bd476eddb0c8a4f06f8409", null ],
      [ "kUART_WakeFlag", "a00029.html#gga259a53f363288115306a45d08fc66eb8a8ca129e7898c036893bae13929525883", null ],
      [ "kUART_DcdDeltaFlag", "a00029.html#gga259a53f363288115306a45d08fc66eb8adf5283f5c932378cac93919e7d5d77d8", null ],
      [ "kUART_DcdFlag", "a00029.html#gga259a53f363288115306a45d08fc66eb8a1c3d7335bce198659e94ae749044a565", null ],
      [ "kUART_RtsFlag", "a00029.html#gga259a53f363288115306a45d08fc66eb8a683ac4d5b01bbfeea1282293cd089da0", null ],
      [ "kUART_TxCompleteFlag", "a00029.html#gga259a53f363288115306a45d08fc66eb8af23b48cba192fcc511857cee4fd7cd3f", null ],
      [ "kUART_BreakDetectFlag", "a00029.html#gga259a53f363288115306a45d08fc66eb8adb8b7904275137c75de5050adc1f2877", null ],
      [ "kUART_RxOverrunFlag", "a00029.html#gga259a53f363288115306a45d08fc66eb8a93d3c56466b4656dcce08d9323d7afd8", null ],
      [ "kUART_RxDataReadyFlag", "a00029.html#gga259a53f363288115306a45d08fc66eb8a5f68dab1ddbb31a54997e5e33534b7e0", null ]
    ] ],
    [ "kStatus_UART_TxBusy", "a00029.html#gga0411cd49bb5b71852cecd93bcbf0ca2da19ddee4fe5963467600028b78fb468e7", null ],
    [ "kStatus_UART_RxBusy", "a00029.html#gga0411cd49bb5b71852cecd93bcbf0ca2da68cf23f981c4b85f82291163fbb2a5e6", null ],
    [ "kStatus_UART_TxIdle", "a00029.html#gga0411cd49bb5b71852cecd93bcbf0ca2daf36c829b1b889517bf775c0d7ce29fa6", null ],
    [ "kStatus_UART_RxIdle", "a00029.html#gga0411cd49bb5b71852cecd93bcbf0ca2dae0877b14627ed2aa8ddb2bf5b033f407", null ],
    [ "kStatus_UART_TxWatermarkTooLarge", "a00029.html#gga0411cd49bb5b71852cecd93bcbf0ca2da765913f003819ed87b861d187bf79ab8", null ],
    [ "kStatus_UART_RxWatermarkTooLarge", "a00029.html#gga0411cd49bb5b71852cecd93bcbf0ca2da720cefde05389830f35f6e6df6f6ac67", null ],
    [ "kStatus_UART_FlagCannotClearManually", "a00029.html#gga0411cd49bb5b71852cecd93bcbf0ca2da5ee8e23fc9ab20cf366942751b895f54", null ],
    [ "kStatus_UART_Error", "a00029.html#gga0411cd49bb5b71852cecd93bcbf0ca2da950972a9e2ebbaa13c92e8f5a51f785d", null ],
    [ "kStatus_UART_RxRingBufferOverrun", "a00029.html#gga0411cd49bb5b71852cecd93bcbf0ca2da2e5b644b1e10c426af818bc78657e992", null ],
    [ "kStatus_UART_RxHardwareOverrun", "a00029.html#gga0411cd49bb5b71852cecd93bcbf0ca2dab6b1fd6c2deec25992449f5b12303a26", null ],
    [ "kStatus_UART_NoiseError", "a00029.html#gga0411cd49bb5b71852cecd93bcbf0ca2dae4ef4df9a5f756ccf1b4bf08292ec2fb", null ],
    [ "kStatus_UART_FramingError", "a00029.html#gga0411cd49bb5b71852cecd93bcbf0ca2daa7aa134f85df3d5863ca962ce1ea7ee0", null ],
    [ "kStatus_UART_ParityError", "a00029.html#gga0411cd49bb5b71852cecd93bcbf0ca2daea20b2588c38f259f1412aa7132c9ef8", null ],
    [ "kStatus_UART_BaudrateNotSupport", "a00029.html#gga0411cd49bb5b71852cecd93bcbf0ca2dae6cdb41e1b49958f57727cd47afd69b2", null ],
    [ "kStatus_UART_BreakDetect", "a00029.html#gga0411cd49bb5b71852cecd93bcbf0ca2da43540408a2faf9ce9e8e8c940bddd456", null ],
    [ "kUART_SevenDataBits", "a00029.html#ggadc68b8fd9ded3990f84129df23fee798ab8c89dfed11b0628f58344705d4b0fb8", null ],
    [ "kUART_EightDataBits", "a00029.html#ggadc68b8fd9ded3990f84129df23fee798a2d77888a8dd82a66fb7bd86e51b4127c", null ],
    [ "kUART_ParityDisabled", "a00029.html#gga436e5a7bdb5f24decb5bfb0c87a83ff4a97e2feae6671a6de1126ebc2edf4606b", null ],
    [ "kUART_ParityEven", "a00029.html#gga436e5a7bdb5f24decb5bfb0c87a83ff4a9e68fe3aba46e045bee5433ed098bff0", null ],
    [ "kUART_ParityOdd", "a00029.html#gga436e5a7bdb5f24decb5bfb0c87a83ff4ae48c7fabc9babf1be626ebeb2627a54c", null ],
    [ "kUART_OneStopBit", "a00029.html#ggaca4f14d23735c6afefb76cbee18e1db6a5a8829a108d8a46abb097a36cde051a7", null ],
    [ "kUART_TwoStopBit", "a00029.html#ggaca4f14d23735c6afefb76cbee18e1db6a9704b3ae3ee851acf324eb357f75ab56", null ],
    [ "kUART_IdleFor4Frames", "a00029.html#ggac1d3d36674ef10ea596df09cd1ac4834a5b39a550a12fb82364e14867ba800df6", null ],
    [ "kUART_IdleFor8Frames", "a00029.html#ggac1d3d36674ef10ea596df09cd1ac4834ad1a880a7b8d05eabd494ad0a9154555d", null ],
    [ "kUART_IdleFor16Frames", "a00029.html#ggac1d3d36674ef10ea596df09cd1ac4834a2379458f47b103178be8e3265e02fa28", null ],
    [ "kUART_IdleFor32Frames", "a00029.html#ggac1d3d36674ef10ea596df09cd1ac4834a12f80ba050b8a679e22b92d5e4e163e7", null ],
    [ "kUART_RxCharReadyFlag", "a00029.html#gga259a53f363288115306a45d08fc66eb8a309643dfba0c44efc0600c02af6eaebf", null ],
    [ "kUART_RxErrorFlag", "a00029.html#gga259a53f363288115306a45d08fc66eb8a792f36da4b89b615ad2d20e05ccb4232", null ],
    [ "kUART_RxOverrunErrorFlag", "a00029.html#gga259a53f363288115306a45d08fc66eb8a310a961508b63dfe3d8d996400ce410c", null ],
    [ "kUART_RxFrameErrorFlag", "a00029.html#gga259a53f363288115306a45d08fc66eb8a088d4fcbbbe8a99aebe86debca4a97c2", null ],
    [ "kUART_RxBreakDetectFlag", "a00029.html#gga259a53f363288115306a45d08fc66eb8af76e33f2ae98819b0fdb938a96a3c7e9", null ],
    [ "kUART_RxParityErrorFlag", "a00029.html#gga259a53f363288115306a45d08fc66eb8aff287d5d8a910bd392c626f0b51a8ef0", null ],
    [ "kUART_ParityErrorFlag", "a00029.html#gga259a53f363288115306a45d08fc66eb8a0c92973ab1d527115fa01934c62a053d", null ],
    [ "kUART_RtsStatusFlag", "a00029.html#gga259a53f363288115306a45d08fc66eb8ac7e88bad028598aab3b9821b9a2e0267", null ],
    [ "kUART_TxReadyFlag", "a00029.html#gga259a53f363288115306a45d08fc66eb8a3913198655fd8ce2eb451d0550619d32", null ],
    [ "kUART_RtsDeltaFlag", "a00029.html#gga259a53f363288115306a45d08fc66eb8ab6a18a71d4711614848e0abfa114d48d", null ],
    [ "kUART_EscapeFlag", "a00029.html#gga259a53f363288115306a45d08fc66eb8a3446413cf0ba110c3f25e869ec723253", null ],
    [ "kUART_FrameErrorFlag", "a00029.html#gga259a53f363288115306a45d08fc66eb8a869aae50c5c1970a098d17c8ce7b844c", null ],
    [ "kUART_RxReadyFlag", "a00029.html#gga259a53f363288115306a45d08fc66eb8a50a2cc679d220e394c538803af4e287e", null ],
    [ "kUART_AgingTimerFlag", "a00029.html#gga259a53f363288115306a45d08fc66eb8a95a6f29cdead568e08951974a708a77f", null ],
    [ "kUART_DtrDeltaFlag", "a00029.html#gga259a53f363288115306a45d08fc66eb8a58c55093c621cb30ff7db3dca0fb3fe9", null ],
    [ "kUART_RxDsFlag", "a00029.html#gga259a53f363288115306a45d08fc66eb8adab01f057c6ed194fa44d0efc64ae15c", null ],
    [ "kUART_tAirWakeFlag", "a00029.html#gga259a53f363288115306a45d08fc66eb8a18f1130c93e0cb2033841dc9686129a3", null ],
    [ "kUART_AwakeFlag", "a00029.html#gga259a53f363288115306a45d08fc66eb8afec67475e7606d8612d8df8ba6273728", null ],
    [ "kUART_Rs485SlaveAddrMatchFlag", "a00029.html#gga259a53f363288115306a45d08fc66eb8a49554d7b7783b495061c5cfc579250f8", null ],
    [ "kUART_AutoBaudFlag", "a00029.html#gga259a53f363288115306a45d08fc66eb8a89cdd9c043992663c2072079684d1f33", null ],
    [ "kUART_TxEmptyFlag", "a00029.html#gga259a53f363288115306a45d08fc66eb8a38300abd304436626e61b70f216f8865", null ],
    [ "kUART_DtrFlag", "a00029.html#gga259a53f363288115306a45d08fc66eb8a257bc03110bc5ebf9b2fbb50c144b320", null ],
    [ "kUART_IdleFlag", "a00029.html#gga259a53f363288115306a45d08fc66eb8aab7d8fe2ab1cd29f7e27ff59fc6cd44e", null ],
    [ "kUART_AutoBaudCntStopFlag", "a00029.html#gga259a53f363288115306a45d08fc66eb8ad1ffb9b804eef7907a061b67672563ac", null ],
    [ "kUART_RiDeltaFlag", "a00029.html#gga259a53f363288115306a45d08fc66eb8a2e0e3b65dd4ad1e0d9d4fc75802e6bd8", null ],
    [ "kUART_RiFlag", "a00029.html#gga259a53f363288115306a45d08fc66eb8a989877e611df5363fb1b9f2f35a10379", null ],
    [ "kUART_IrFlag", "a00029.html#gga259a53f363288115306a45d08fc66eb8a2d7ecd6806bd476eddb0c8a4f06f8409", null ],
    [ "kUART_WakeFlag", "a00029.html#gga259a53f363288115306a45d08fc66eb8a8ca129e7898c036893bae13929525883", null ],
    [ "kUART_DcdDeltaFlag", "a00029.html#gga259a53f363288115306a45d08fc66eb8adf5283f5c932378cac93919e7d5d77d8", null ],
    [ "kUART_DcdFlag", "a00029.html#gga259a53f363288115306a45d08fc66eb8a1c3d7335bce198659e94ae749044a565", null ],
    [ "kUART_RtsFlag", "a00029.html#gga259a53f363288115306a45d08fc66eb8a683ac4d5b01bbfeea1282293cd089da0", null ],
    [ "kUART_TxCompleteFlag", "a00029.html#gga259a53f363288115306a45d08fc66eb8af23b48cba192fcc511857cee4fd7cd3f", null ],
    [ "kUART_BreakDetectFlag", "a00029.html#gga259a53f363288115306a45d08fc66eb8adb8b7904275137c75de5050adc1f2877", null ],
    [ "kUART_RxOverrunFlag", "a00029.html#gga259a53f363288115306a45d08fc66eb8a93d3c56466b4656dcce08d9323d7afd8", null ],
    [ "kUART_RxDataReadyFlag", "a00029.html#gga259a53f363288115306a45d08fc66eb8a5f68dab1ddbb31a54997e5e33534b7e0", null ],
    [ "UART_GetInstance", "a00029.html#gadeeb40cdc314638d4355ef906f1c408d", null ],
    [ "UART_SoftwareReset", "a00029.html#gada461a15fc0fd6fdbaaf35263da9af89", null ],
    [ "UART_Init", "a00029.html#gab5965a8e11f7e1d4d531141291fd5288", null ],
    [ "UART_Deinit", "a00029.html#ga3ff48bc211831be33e6fe5c50eb671a0", null ],
    [ "UART_GetDefaultConfig", "a00029.html#ga47c7c09e04a0497f4530d553e27d96c5", null ],
    [ "UART_SetBaudRate", "a00029.html#gab3ba5019c11f288cc4f545dd656b6284", null ],
    [ "UART_Enable", "a00029.html#gae1c2de08deac42b1fe8675bba9ece467", null ],
    [ "UART_SetIdleCondition", "a00029.html#ga55c076014a07717b8d8ed889800b833b", null ],
    [ "UART_Disable", "a00029.html#ga4b6fdc3af78f9d5e8a1f8f6a07ce124d", null ],
    [ "UART_GetStatusFlag", "a00029.html#ga5a6ca92e153c2a2c1323c5dc2fae6ab4", null ],
    [ "UART_ClearStatusFlag", "a00029.html#gaf547a539e6d7540010ef688e51bc2eeb", null ],
    [ "UART_EnableInterrupts", "a00029.html#ga49ecd761481a22956e3f46285038719c", null ],
    [ "UART_DisableInterrupts", "a00029.html#ga3f24b6b9b730046a9a81918f9abe7d99", null ],
    [ "UART_GetEnabledInterrupts", "a00029.html#ga79bc0b880286ec0dc0543606fc772912", null ],
    [ "UART_EnableTx", "a00029.html#gaf2ed68f3dd6ee8a272e9afd8ebd84f93", null ],
    [ "UART_EnableRx", "a00029.html#gaa503e36c8ce82f1042ce186b9863871f", null ],
    [ "UART_WriteByte", "a00029.html#ga371d2ceda535de3a74beba5a3465fab0", null ],
    [ "UART_ReadByte", "a00029.html#ga3728011ac7906f3e03bb677b0f9cf7b4", null ],
    [ "UART_WriteBlocking", "a00029.html#gad67794d80b7ee2d3292b41af6ff1e100", null ],
    [ "UART_ReadBlocking", "a00029.html#ga39d59e8a94f1af451a0db81888596639", null ],
    [ "UART_TransferCreateHandle", "a00029.html#ga63db308c32019b7dd6c0647d618e5247", null ],
    [ "UART_TransferStartRingBuffer", "a00029.html#ga223fba584bfabd599629d5ce92f929ac", null ],
    [ "UART_TransferStopRingBuffer", "a00029.html#ga0c0bc73df49cb31dff0e903630314f5b", null ],
    [ "UART_TransferGetRxRingBufferLength", "a00029.html#ga3921aa660977ca77dadf95fa35f1c3a9", null ],
    [ "UART_TransferSendNonBlocking", "a00029.html#gad89afd7db1656c5aef404bb285d0dc05", null ],
    [ "UART_TransferAbortSend", "a00029.html#gaa64f9f89d8286fd3ef0736a8c40be2c2", null ],
    [ "UART_TransferGetSendCount", "a00029.html#ga071727ba05b2937ef5ad641ca7faf9c7", null ],
    [ "UART_TransferReceiveNonBlocking", "a00029.html#gaf804acde5d73ce0a5bf54b06195e1218", null ],
    [ "UART_TransferAbortReceive", "a00029.html#gacc35671622b2401545cc55cc6ae572d4", null ],
    [ "UART_TransferGetReceiveCount", "a00029.html#ga05df10f570cdca4ac2dff63b069d254e", null ],
    [ "UART_TransferHandleIRQ", "a00029.html#gadb0c4f1e5b59db3aa2261df4f5ddb48d", null ],
    [ "UART_EnableTxDMA", "a00029.html#ga93a5d80d9f8ec9e61eb54db18efa5c63", null ],
    [ "UART_EnableRxDMA", "a00029.html#ga32e14856ac77e50800e733ba8ab9c448", null ],
    [ "UART_SetTxFifoWatermark", "a00029.html#ga5ed56b76143c42e6e712d1a4d6a1fbdd", null ],
    [ "UART_SetRxFifoWatermark", "a00029.html#ga9fc461e2d9a906a2b5aa1363ab06044c", null ],
    [ "UART_EnableAutoBaudRate", "a00029.html#gac88019d2b8abe60bd6ee8cf2c1e8dfb0", null ],
    [ "UART_IsAutoBaudRateComplete", "a00029.html#ga28850ab8c31bd095fde407992b937035", null ],
    [ "baudRate_Bps", "a00029.html#gacc123668836f3432c54ee6a2f6f318f1", null ],
    [ "parityMode", "a00029.html#ga1a3abcf4f0f5d0a3893df14f2991aa39", null ],
    [ "dataBitsCount", "a00029.html#gaa026642db643d8cae1a64869acd9baf5", null ],
    [ "stopBitCount", "a00029.html#gadf6e33c13910e9ec7c2688f83a462be0", null ],
    [ "txFifoWatermark", "a00029.html#ga5eb9ab81752080bc726b8d625d2b6b21", null ],
    [ "rxFifoWatermark", "a00029.html#ga1bb7b2f0f7df79977d33be264fb5163a", null ],
    [ "enableAutoBaudRate", "a00029.html#gac595435b68632c2dbaece764c54cd41d", null ],
    [ "enableTx", "a00029.html#ga91d575902455699a312c64b564133a8d", null ],
    [ "enableRx", "a00029.html#gaa045acd340fc86d70a497f49e0a95bdd", null ],
    [ "data", "a00029.html#gaf91f05b0f951836e3002f60f0575f369", null ],
    [ "dataSize", "a00029.html#ga21820f8294de0d75d863b72512a7c12f", null ],
    [ "txData", "a00029.html#ga046372eac11f58a16f519c0ee264ea9e", null ],
    [ "txDataSize", "a00029.html#ga1e67a92b463ad328646834ea0de4d70d", null ],
    [ "txDataSizeAll", "a00029.html#ga80361474eb03b3aa30d02bda82adce65", null ],
    [ "rxData", "a00029.html#ga5c87354702502998d3ccca9d9bfd3069", null ],
    [ "rxDataSize", "a00029.html#ga46bd84d885004806f89744ad79edd81e", null ],
    [ "rxDataSizeAll", "a00029.html#ga800a05d5ea3c6240daad46f466a8fea4", null ],
    [ "rxRingBuffer", "a00029.html#gafeba8b549facc329937046e734681963", null ],
    [ "rxRingBufferSize", "a00029.html#ga8d6afed4b64233c959a180b66686c14c", null ],
    [ "rxRingBufferHead", "a00029.html#ga85d061606b31401fb4a9d0e22e77056c", null ],
    [ "rxRingBufferTail", "a00029.html#ga9f4482059188bea2603b1c07cf9cc084", null ],
    [ "callback", "a00029.html#ga2ef9706e8203ba72fa1e04c48581fb0f", null ],
    [ "userData", "a00029.html#ga69ce1fdb7a2f60c0ecc94c4d1b2ed6ff", null ],
    [ "txState", "a00029.html#ga9fa8f119b6e0e3a7805fb25edafb1498", null ],
    [ "rxState", "a00029.html#ga5aa95f3d2cb81a8bb01a11ab2cf66234", null ]
];