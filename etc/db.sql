-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- 主机： localhost
-- 生成日期： 2021-09-23 17:19:27
-- 服务器版本： 10.4.19-MariaDB
-- PHP 版本： 8.0.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 数据库： `test_db`
--

-- --------------------------------------------------------

--
-- 表的结构 `db`
--

CREATE TABLE `db` (
  `id` varchar(255) NOT NULL,
  `click` int(11) NOT NULL,
  `country` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 转存表中的数据 `db`
-- id, 点击次数，国家

INSERT INTO `db` (`id`, `click`, `country`) VALUES
('YTpar8n9FmfKa3KLldXb1NCSecUZhLff9l22URTtLOrhVCaw3M0US-esRXk1YHJ2zxQk2A-PaSK2FJSAHvhnnRu89JSrjEUJ7aqP-W-42KrQyXa3aT0yHR8l-6ELAg9bH8Qo7f', 18, 'Malaysia'),
('RylkSd5pa8e3U2dBUcGfSY9c2xvBuOtRwNQK5BxVphJFprjYo_fCj0d1tNa1nS6tWpqOGwfxbGKJiqTV_Vp3CtF6sc7ZMREdq0mt-Gzaw9l_80WBDp-8iNZNta4Prk9d0NRHZv5d8NK96uuiiYlWoVI7-f-voKB2ymnKJWMjhqWfELvF7-mAKq15q9Medh75mJ3fsBzwrEogECkgTr9eSYR4WoPG', 11, 'Malaysia'),
('zVNe3iy52pV0a_eeZ6GH3RvmH4l0uXgwoea_m0BeZXdsZ3vQy8YOgNs4wob502ugCz1dKtmyTkoHi_jgaDVz-wlCm0K0kZ2vtSRBKpUp1BWvytaIopfG-a-hSAPMV_il0E5z2RTnhzgi9eeclFigpvZ-eakPfYtWUxNJHCrZcYjzVR_bZkg6ITiZNYzddYHTdXsYocRQ-ZDaE-AigwNHMtYanlKit9LmfAmZNg', 32, 'Malaysia'),
('xbUknioh7y7O4ZknxLOuFVktqPm_Yp5m8ul4iKxg0IUhYLKVqrReDimzRQe26vq2qwr4OPy6Y0gzpl1dt2Q7l6LVDq5pe67f5Xx3A2U_GL7y5jLeE4-1mM94Ok_96QQMQ2go8FbNbrHyhuGoe8Xx_Zn5r', 59, 'Malaysia'),
('TQIsxlmLxtiqkRpZ_FjrGDp-vccAj5Q5v1-HONkpTev_0-A8DHzZ2GTaXOBZrwU-ccJhouChjeXS1h-oN8PGA00nuqjg16iqRQFSJqqh7Rd_omr9e32_g7D3mcLWEaV_4z61IxrWyiouyyJj9vY9ASuPN70GZddx8pRYp', 552, 'Malaysia'),
('uvBz9tTu5Ndkxi4IQk0BXaGfHRxZvulqlun6AF9F86cNIwvLTcOG25yifvSMKw0ux1nzD4VoRC61E_nAITyPku-qdcokLj4Q0O-vSYnkQrEW40PUtIHoji_2q1fhI0xVPE5TDR8IcJ6gro', 692, 'Malaysia'),
('hingtT6par8n9FmfKa3KLldXb1NCSecUZhLff9l22URTtLOrhVCaw3', 1000, 'China');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
