SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

CREATE DATABASE IF NOT EXISTS `tawe_database`;

USE `tawe_database`;

CREATE TABLE IF NOT EXISTS `tawe_testimonials` (
`id` bigint(20) NOT NULL,
  `name` varchar(64) NOT NULL,
  `testimonial` varchar(255) NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

INSERT INTO `tawe_testimonials` (`id`, `name`, `testimonial`) VALUES
(1, 'Bruce Graham', 'OMG - just discovered Tawe, from Sparkol. HUGE possibilities for eLearning and presentations'),
(2, 'Dave Baysden', 'Was just shown Tawe by a friend yesterday! This is a game changer - so excited to sketchnote, present and share!'),
(3, 'Mahmoud Pouladi', 'Just tried out your Tawe app and found it to be absolutely fantastic - intuitive, easy to use, and just very useful.'),
(4, 'Adeesha Hack', 'Thank you for developing another great product. I have VideoScribe as well. These resources really do assist teachers in making their classes more interesting so thank you very very much.'),
(5, 'Colin Horner', 'I can''t understand how I haven''t heard of Tawe before, but noe I have it is going to become an essential part of my publishing tools.');


ALTER TABLE `tawe_testimonials`
 ADD PRIMARY KEY (`id`);


ALTER TABLE `tawe_testimonials`
MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
