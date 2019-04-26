-- phpMyAdmin SQL Dump
-- version 4.4.15.10
-- https://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: 09 Apr 2019 pada 03.07
-- Versi Server: 5.5.60-MariaDB
-- PHP Version: 5.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_chat`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `d_conversation`
--

CREATE TABLE IF NOT EXISTS `d_conversation` (
  `id_conversation` int(10) NOT NULL,
  `id_room` varchar(10) NOT NULL,
  `text` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktur dari tabel `room`
--

CREATE TABLE IF NOT EXISTS `room` (
  `id` int(10) NOT NULL,
  `room_id` varchar(255) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `telp` varchar(16) NOT NULL,
  `status_room` enum('opened','closed','deleted') NOT NULL,
  `creation_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB AUTO_INCREMENT=127 DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `room`
--

INSERT INTO `room` (`id`, `room_id`, `name`, `email`, `telp`, `status_room`, `creation_date`) VALUES
(5, 'DUEZ1P60YTgT6wIZAAAA', 'jhk', '', '', 'deleted', '0000-00-00 00:00:00'),
(6, '2o3vdnsxLCcfknZFAAAC', 'jono', '', '', 'deleted', '0000-00-00 00:00:00'),
(7, '39OeaL2iZw3iALlDAAAA', 'jn', '', '', 'deleted', '0000-00-00 00:00:00'),
(8, 'EwbIA-9Jy-pQitXBAAAB', 'ks', '', '', 'deleted', '2019-04-02 07:42:36'),
(9, '6uZ2QP6FQhjFO2HVAAAC', 'ks', '', '', 'deleted', '2019-04-02 08:31:07'),
(10, 'HSkkUpq5vrjYrWbEAAAD', 'jon', '', '', 'opened', '2019-04-02 08:33:59'),
(11, 'TML77OYBPti_kOyfAAAA', 'jon', '', '', 'opened', '2019-04-02 08:35:03'),
(12, 'RXnA1N81_m5UP88lAAAA', 'jon', '', '', 'opened', '2019-04-02 08:38:41'),
(13, '6-emYxZTQpgtrTjNAAAA', 'ko', '', '', 'opened', '2019-04-04 03:13:54'),
(14, '296AAkL-FQdHHKnLAAAB', 'farid anjing', '', '', 'deleted', '2019-04-04 04:31:00'),
(15, 'pWs90UAIDTO8r219AAAA', 'hjk', '', '', 'opened', '2019-04-04 04:31:10'),
(16, 'qqQteDNWYICFTN5kAAAC', 'copong', '', '', 'deleted', '2019-04-04 04:31:50'),
(17, 'ywBPvi_3WzHnksUJAAAB', 'gh', '', '', 'opened', '2019-04-04 06:11:08'),
(18, '6ntj1IXJCjK6nHGyAAAE', 'gs', '', '', 'deleted', '2019-04-04 07:29:22'),
(19, 'YojpmzSadn3GEfbaAAAj', 'sada', '', '', 'deleted', '2019-04-04 08:49:32'),
(20, 'M9utY4DI7euKu8UmAAAy', 'faas', '', '', 'deleted', '2019-04-04 08:56:38'),
(21, 'x917NTZa2fwKUX9BAAA4', 'safa', '', '', 'deleted', '2019-04-04 08:58:08'),
(22, 'V3CpWvx9qKcERHGfAAA6', 'asf', '', '', 'deleted', '2019-04-04 08:59:02'),
(23, '_EdSHndKk4XLrrApAAA8', 'dasda', '', '', 'deleted', '2019-04-04 09:00:03'),
(24, 'LGsRWBuyXF6Uz_oXAAA9', 'sa', '', '', 'deleted', '2019-04-04 09:00:32'),
(25, 'fiZz0oEHPXbESaJ3AAA-', 'asf', '', '', 'deleted', '2019-04-04 09:00:47'),
(26, 'mGHJpMWHo_atx8kyAABC', 'saf', '', '', 'deleted', '2019-04-04 09:01:36'),
(27, 'X752YxRyJ5tDNKO6AABD', 'ccvb', '', '', 'deleted', '2019-04-04 09:01:55'),
(28, 'g0UDu9tLUGZVbp8tAABE', 'saf', '', '', 'deleted', '2019-04-04 09:02:16'),
(29, 'mBoWTVDHpsq1bwRfAABF', 'vz', '', '', 'deleted', '2019-04-04 09:02:49'),
(30, 'allZefqMVdWMFYRVAABG', 'asf', '', '', 'deleted', '2019-04-04 09:03:07'),
(31, 'vbCf-ddZ-9a_GnToAABI', 'asfsa', '', '', 'deleted', '2019-04-04 09:07:05'),
(32, 'dwG7oXKBKxmaYCtzAABJ', 'asf', '', '', 'deleted', '2019-04-04 09:07:22'),
(33, 'eoQjDposSLgfchwuAABM', 'fa', '', '', 'deleted', '2019-04-04 09:08:11'),
(34, 'ycylE2tzkoGSrmLNAABP', 'Test', '', '', 'deleted', '2019-04-04 09:22:14'),
(35, 'sR3JWkQIZtZm-rLlAABQ', 'kopong', '', '', 'deleted', '2019-04-04 09:23:10'),
(36, '_pKtlmmrrUEvOelbAABU', 'test', '', '', 'deleted', '2019-04-04 09:23:26'),
(37, 'Lxxd0FpYXCvNKzzjAADf', 'awan@gmail.com', '', '', 'deleted', '2019-04-05 07:24:03'),
(38, 'qpGtYdhfNgRyfEV_AADj', 'awan@gmail.com', '', '', 'deleted', '2019-04-05 07:25:55'),
(39, 'k0vyW5pUw3D-zBuZAADl', 'awan@gmail.com', '', '', 'deleted', '2019-04-05 07:27:01'),
(40, 'lAp03j9XMOcYNA0fAAAB', 'awan@gmail.com', 'sanonimak@gmail.com', '09631089469', 'deleted', '2019-04-05 08:15:31'),
(41, 'RyGJRhmeXUvI8cQbAAAD', 'awan@gmail.com', 'sanonimak@gmail.com', '09631089469', 'deleted', '2019-04-05 08:19:56'),
(42, 'jKXX68NdNoATbRO8AAAE', 'test', 'sanonimak@gmail.com', '09631089469', 'deleted', '2019-04-05 08:20:51'),
(43, 'mk1ro4fKd0056V7OAAAG', 'test', 'sanonimak@gmail.com', '09631089469', 'deleted', '2019-04-05 09:15:29'),
(49, 'aRmviPLzPSo_RgZBAAAD', 'test', 'kjhjk', '0887667678', 'deleted', '2019-04-05 11:38:54'),
(50, 'RZu9lWswsvGOOrB1AAAC', 'awan@gmail.com', 'sanonimak@gmail.com', '09631089469', 'deleted', '2019-04-08 03:40:24'),
(51, '9T3rxfJip34BJjnUAAAD', 'awan@gmail.com', 'sanonimak@gmail.com', '09631089469', 'deleted', '2019-04-08 03:43:14'),
(52, '1O2EoyvNUej-oXtuAAAE', 'awan@gmail.com', 'sanonimak@gmail.com', '09631089469', 'deleted', '2019-04-08 03:43:43'),
(53, '9aSmlwIv1aUlRSWxAAAF', 'awan@gmail.com', 'sanonimak@gmail.com', '09631089469', 'deleted', '2019-04-08 03:44:12'),
(54, '7Vr0sIZ6tcaUXnIFAAAG', 'awan@gmail.com', 'sanonimak@gmail.com', '09631089469', 'deleted', '2019-04-08 03:47:49'),
(55, '7rvrQYcRjjYnNd5_AAAH', 'awan@gmail.com', 'sanonimak@gmail.com', '09631089469', 'deleted', '2019-04-08 03:48:22'),
(56, '4SVq70yOMU_A3whhAAAI', 'awan@gmail.com', 'sanonimak@gmail.com', '09631089469', 'deleted', '2019-04-08 03:49:51'),
(57, 'Jxq9Tm4Ori5k__AWAAAJ', 'awan@gmail.com', 'sanonimak@gmail.com', '09631089469', 'deleted', '2019-04-08 03:57:49'),
(58, 'FkDTi02jk_Dhjp9kAAAK', 'awan@gmail.com', 'sanonimak@gmail.com', '09631089469', 'deleted', '2019-04-08 05:41:38'),
(59, 'YN2V4OeMw_evmSjOAAAL', 'awan@gmail.com', 'sanonimak@gmail.com', '09631089469', 'deleted', '2019-04-08 05:42:27'),
(60, 'fkyDm2GD4rj5V7nSAAAM', 'awan@gmail.com', 'sanonimak@gmail.com', '09631089469', 'deleted', '2019-04-08 05:42:43'),
(61, 'ZF2vNgTDJnWOtulFAAAU', 'awan@gmail.com', 'sanonimak@gmail.com', '09631089469', 'deleted', '2019-04-08 05:52:19'),
(62, 'dJ4CUY8ZVDyhBvHKAAAV', 'awan@gmail.com', 'sanonimak@gmail.com', '09631089469', 'deleted', '2019-04-08 05:59:30'),
(63, 'bIT8YcjEu3I8aEO2AAAW', 'awan@gmail.com', 'sanonimak@gmail.com', '09631089469', 'deleted', '2019-04-08 05:59:45'),
(64, 'CdKPrPRKL4qBBKhIAAAX', 'awan@gmail.com', 'sanonimak@gmail.com', '09631089469', 'deleted', '2019-04-08 06:00:35'),
(65, 'zICeYzLWoKnmeuT4AAAZ', 'awan@gmail.com', 'sanonimak@gmail.com', '09631089469', 'deleted', '2019-04-08 06:00:53'),
(66, 'yo8FLODOn5JO8CalAAAa', 'awan@gmail.com', 'sanonimak@gmail.com', '09631089469', 'deleted', '2019-04-08 06:02:35'),
(67, 't_LyHf-sGot_gfl6AAAb', 'awan@gmail.com', 'sanonimak@gmail.com', '09631089469', 'deleted', '2019-04-08 06:03:55'),
(68, 'DSVyByl-YxuAMbGeAAAd', 'awan@gmail.com', 'sanonimak@gmail.com', '09631089469', 'deleted', '2019-04-08 06:06:39'),
(69, 'K4vWrVHABvku9sgsAAAe', 'awan@gmail.com', 'sanonimak@gmail.com', '09631089469', 'deleted', '2019-04-08 06:09:01'),
(70, 'mXLSOjl_JpWfevAjAAAf', 'awan@gmail.com', 'sanonimak@gmail.com', '09631089469', 'deleted', '2019-04-08 06:13:29'),
(71, 'V4FwewHon4ni7JZSAAAg', 'ibnoob', 'ibnoob@noob.com', '088768768768', 'deleted', '2019-04-08 06:14:03'),
(72, 'vXKTEMd4SvQlDltmAAAh', 'awan@gmail.com', 'sanonimak@gmail.com', '09631089469', 'deleted', '2019-04-08 06:43:11'),
(73, 'QXXcVw96VSARKcKYAAAi', 'awan@gmail.com', 'sanonimak@gmail.com', '09631089469', 'deleted', '2019-04-08 06:43:54'),
(74, 'yUj_x-wO_KjeBip0AAAj', 'awan@gmail.com', 'sanonimak@gmail.com', '09631089469', 'deleted', '2019-04-08 06:44:50'),
(75, 'QiV_Tw9YohxSmidzAAAk', 'awan@gmail.com', 'sanonimak@gmail.com', '09631089469', 'deleted', '2019-04-08 06:46:40'),
(76, '7sdab1oil_DYzfraAAAl', 'awan@gmail.com', 'sanonimak@gmail.com', '09631089469', 'deleted', '2019-04-08 06:47:39'),
(77, 'nKVfgOTwK3ixKooOAAAm', 'awan@gmail.com', 'sanonimak@gmail.com', '09631089469', 'deleted', '2019-04-08 07:00:50'),
(78, 'dTsORubKTlQENfigAAAn', 'awan@gmail.com', 'sanonimak@gmail.com', '09631089469', 'deleted', '2019-04-08 07:03:45'),
(79, 'LTYyBf_60618kAKcAAAo', 'awan@gmail.com', 'sanonimak@gmail.com', '09631089469', 'deleted', '2019-04-08 07:23:00'),
(80, 's4onhLgfCJ-xeSDJAAAq', 'awan@gmail.com', 'sanonimak@gmail.com', '09631089469', 'deleted', '2019-04-08 07:23:32'),
(81, 'v8oRCl0AqlQYbSYdAAAr', 'awan@gmail.com', 'sanonimak@gmail.com', '09631089469', 'deleted', '2019-04-08 07:24:09'),
(82, 'gXxHDin6GgIJPCH7AAAs', 'awan@gmail.com', 'sanonimak@gmail.com', '09631089469', 'deleted', '2019-04-08 07:25:27'),
(83, 'KiuaCEEmgG5mCIhJAAAt', 'awan@gmail.com', 'sanonimak@gmail.com', '09631089469', 'deleted', '2019-04-08 07:27:32'),
(84, 'c2c9OuQ8KjkBBQeZAAAu', 'awan@gmail.com', 'sanonimak@gmail.com', '09631089469', 'deleted', '2019-04-08 07:31:11'),
(85, 'N_3U-YrqJ6p4_CloAAAv', 'awan@gmail.com', 'sanonimak@gmail.com', '09631089469', 'deleted', '2019-04-08 07:33:09'),
(86, 'dIxI8_dgwqGPdhXlAAAw', 'awan@gmail.com', 'sanonimak@gmail.com', '09631089469', 'deleted', '2019-04-08 07:34:29'),
(87, 'OfS7Rk5I7GJvuawbAAAx', 'awan@gmail.com', 'sanonimak@gmail.com', '09631089469', 'deleted', '2019-04-08 07:35:33'),
(88, 'pPS20tops2UFcJ2LAAAy', 'awan@gmail.com', 'sanonimak@gmail.com', '09631089469', 'deleted', '2019-04-08 07:37:45'),
(89, 'p7akO6gME8rGIRGZAAAz', 'awan@gmail.com', 'sanonimak@gmail.com', '09631089469', 'deleted', '2019-04-08 07:37:52'),
(90, 'rvzDMVEF2ycaAHxoAAA0', 'awan@gmail.com', 'sanonimak@gmail.com', '09631089469', 'deleted', '2019-04-08 07:39:23'),
(91, '0y4Q97wUdR9xoBiZAAA1', 'awan@gmail.com', 'sanonimak@gmail.com', '09631089469', 'deleted', '2019-04-08 07:45:14'),
(92, 'sx3TdzIJLGK5Xa3GAAA2', 'awan@gmail.com', 'sanonimak@gmail.com', '09631089469', 'deleted', '2019-04-08 08:02:12'),
(93, 'SNzJ1aGR3cVb8kGuAAA3', 'awan@gmail.com', 'sanonimak@gmail.com', '09631089469', 'deleted', '2019-04-08 08:03:31'),
(94, 'QSodk7RWQsP4GFkGAAA4', 'awan@gmail.com', 'sanonimak@gmail.com', '09631089469', 'deleted', '2019-04-08 08:04:05'),
(95, 'CerSIVYgIQdZfvWrAAA5', 'awan@gmail.com', 'sanonimak@gmail.com', '09631089469', 'deleted', '2019-04-08 08:04:34'),
(96, 'rYhchFqE_iSoHxYfAAA6', 'awan@gmail.com', 'sanonimak@gmail.com', '09631089469', 'deleted', '2019-04-08 08:09:35'),
(97, '6whuHF6JyJ287lS8AAA7', 'awan@gmail.com', 'sanonimak@gmail.com', '09631089469', 'deleted', '2019-04-08 08:22:10'),
(98, 'ZHbWp2pj3kj-cW-LAAA8', 'awan@gmail.com', 'sanonimak@gmail.com', '09631089469', 'deleted', '2019-04-08 08:22:54'),
(99, 'cZ1KEf4bt1gaqupcAAA9', 'awan@gmail.com', 'sanonimak@gmail.com', '09631089469', 'deleted', '2019-04-08 08:43:45'),
(100, 'udsyGTp1jCwlJHp0AAA-', 'awan@gmail.com', 'sanonimak@gmail.com', '09631089469', 'deleted', '2019-04-08 08:44:11'),
(101, 'oxk4RFrS8YV1hEW4AAA_', 'awan@gmail.com', 'sanonimak@gmail.com', '09631089469', 'deleted', '2019-04-08 08:46:33'),
(102, 'izmOkSorp7nlKgV2AABA', 'awan@gmail.com', 'sanonimak@gmail.com', '09631089469', 'deleted', '2019-04-08 08:48:40'),
(103, 'RoQy7_BnlH-jSlXAAABB', 'awan@gmail.com', 'sanonimak@gmail.com', '09631089469', 'deleted', '2019-04-08 08:49:29'),
(104, 'gLyz7LW9MAzcU7ucAABC', 'awan@gmail.com', 'sanonimak@gmail.com', '09631089469', 'deleted', '2019-04-08 08:51:33'),
(105, '51KLI6gWhTQS6ct8AABD', 'awan@gmail.com', 'sanonimak@gmail.com', '09631089469', 'deleted', '2019-04-08 08:52:17'),
(106, 'L5YEer3LwoyE4oOsAABE', 'awan@gmail.com', 'sanonimak@gmail.com', '09631089469', 'deleted', '2019-04-08 08:53:30'),
(107, '2fSx7cckd38ZcOjxAABF', 'ATI@cloudtech.id', 'sanonimak@gmail.com', '09631089469', 'deleted', '2019-04-08 08:54:48'),
(108, '34F3IwO5N2t4ZBI2AABG', 'awan@gmail.com', 'sanonimak@gmail.com', '09631089469', 'deleted', '2019-04-08 08:55:53'),
(109, '9k3XhqLmbb0gkEZ8AABH', 'awan@gmail.com', 'sanonimak@gmail.com', '09631089469', 'deleted', '2019-04-08 08:56:56'),
(110, '5Jq9nwXhdn9ykHiYAABI', 'awan@gmail.com', 'sanonimak@gmail.com', '09631089469', 'deleted', '2019-04-08 08:58:14'),
(111, 'tg7UcmTubsehFV7DAABJ', 'awan@gmail.com', 'sanonimak@gmail.com', '09631089469', 'deleted', '2019-04-08 09:02:05'),
(112, 'Ks-mv_k6xXLm0kbEAABK', 'awan@gmail.com', 'sanonimak@gmail.com', '09631089469', 'deleted', '2019-04-08 09:02:37'),
(113, 'aKKS-giyqfjNdjtbAABL', 'awan@gmail.com', 'sanonimak@gmail.com', '09631089469', 'deleted', '2019-04-08 09:03:39'),
(114, 'eoxKKs_sQJS0EyVaAABM', 'ATI@cloudtech.id', 'sanonimak@gmail.com', '09631089469', 'deleted', '2019-04-08 09:04:38'),
(115, 'WC2-6mrSVG7lMrGOAABN', 'awan@gmail.com', 'sanonimak@gmail.com', '09631089469', 'deleted', '2019-04-08 09:15:15'),
(116, 'uYehsajKC8O89nIjAABO', 'awan@gmail.com', 'sanonimak@gmail.com', '09631089469', 'deleted', '2019-04-08 09:16:24'),
(117, 'krX9Liqmf_2L2-Z0AABP', 'awan@gmail.com', 'sanonimak@gmail.com', '09631089469', 'deleted', '2019-04-08 09:16:56'),
(118, 'L5Dp-5SNoQzY-2YsAABQ', 'awan@gmail.com', 'sanonimak@gmail.com', '09631089469', 'deleted', '2019-04-08 09:17:33'),
(119, 'EcnzGFh4bPPKZ7wxAABR', 'awan@gmail.com', 'sanonimak@gmail.com', '09631089469', 'deleted', '2019-04-08 09:17:59'),
(120, 'gHEFSMxA8BJUpG3CAABS', 'awan@gmail.com', 'sanonimak@gmail.com', '09631089469', 'deleted', '2019-04-08 09:42:56'),
(121, '3n7uzdFXRuPVJJI8AABT', 'awan@gmail.com', 'sanonimak@gmail.com', '09631089469', 'deleted', '2019-04-08 09:44:04'),
(122, 'dHLo34lhelnKX29OAABU', 'awan@gmail.com', 'sanonimak@gmail.com', '09631089469', 'deleted', '2019-04-08 09:45:29'),
(123, 'NVHxPBEEzRoX4zfAAABV', 'awan@gmail.com', 'sanonimak@gmail.com', '09631089469', 'deleted', '2019-04-08 10:02:01'),
(124, '94maxlOM4f9RfpSuAABW', 'awan@gmail.com', 'sanonimak@gmail.com', '09631089469', 'deleted', '2019-04-08 10:03:39'),
(125, '-bNaI2N24H79iV2eAABX', 'awan@gmail.com', 'sanonimak@gmail.com', '09631089469', 'deleted', '2019-04-08 10:06:30'),
(126, 'tjJC1uwjUP-DO0BXAABY', 'awan@gmail.com', 'sanonimak@gmail.com', '09631089469', 'deleted', '2019-04-08 10:07:49');

-- --------------------------------------------------------

--
-- Struktur dari tabel `room_detail_cs`
--

CREATE TABLE IF NOT EXISTS `room_detail_cs` (
  `id` int(10) NOT NULL,
  `id_cs` int(10) NOT NULL,
  `id_room` int(10) NOT NULL,
  `status_cs` enum('active','nonactive') NOT NULL,
  `creation_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktur dari tabel `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `id` int(4) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `pass` varchar(50) NOT NULL,
  `role` enum('Admin','Operator') NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `user`
--

INSERT INTO `user` (`id`, `name`, `email`, `pass`, `role`) VALUES
(1, 'rizal', 'admin@gmail.com', '0b1e50e1fd71c96bac94144cc59cff40', 'Admin'),
(2, 'rizal', 'admin2@gmail.com', '19df78bd058fb08b802f9bd4e466019d', 'Operator');

-- --------------------------------------------------------

--
-- Struktur dari tabel `user_chat`
--

CREATE TABLE IF NOT EXISTS `user_chat` (
  `socket_id` varchar(255) NOT NULL,
  `id_user` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktur dari tabel `visitor`
--

CREATE TABLE IF NOT EXISTS `visitor` (
  `id` int(11) NOT NULL,
  `id_visitor` varchar(50) NOT NULL,
  `id_room` int(10) NOT NULL,
  `nama` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `d_conversation`
--
ALTER TABLE `d_conversation`
  ADD PRIMARY KEY (`id_conversation`);

--
-- Indexes for table `room`
--
ALTER TABLE `room`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id_room` (`room_id`);

--
-- Indexes for table `room_detail_cs`
--
ALTER TABLE `room_detail_cs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_chat`
--
ALTER TABLE `user_chat`
  ADD PRIMARY KEY (`socket_id`),
  ADD UNIQUE KEY `socket_id` (`socket_id`);

--
-- Indexes for table `visitor`
--
ALTER TABLE `visitor`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `d_conversation`
--
ALTER TABLE `d_conversation`
  MODIFY `id_conversation` int(10) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `room`
--
ALTER TABLE `room`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=127;
--
-- AUTO_INCREMENT for table `room_detail_cs`
--
ALTER TABLE `room_detail_cs`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `visitor`
--
ALTER TABLE `visitor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
