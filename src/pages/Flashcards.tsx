import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../i18n';
import { useAuth } from '../auth';
import { 
  BookOpen, ChevronLeft, ChevronRight, RotateCw, CheckCircle, 
  Sparkles, GraduationCap, Shuffle, ArrowLeft, Layers, Volume2
} from 'lucide-react';

interface Flashcard {
  term: { en: string; vi: string };
  definition: { en: string; vi: string };
  hint?: { en: string; vi: string };
  formula?: string;
}

interface Deck {
  id: string;
  subject: string;
  subjectVi: string;
  subjectEn: string;
  title: { en: string; vi: string };
  color: string;
  badgeColor: string;
  cards: Flashcard[];
}

export const ALL_GRADE_DECKS: Record<string, Deck[]> = {
  middle: [
    {
      id: 'middle-math',
      subject: 'Toán học',
      subjectVi: 'Toán học',
      subjectEn: 'Mathematics',
      title: { en: 'Mathematics 6 - Sets, Numbers & Geometry', vi: 'Toán học 6 - Số học, Tập hợp & Hình học phẳng' },
      color: 'border-blue-500 bg-blue-50/50 dark:bg-blue-950/20 text-blue-700 dark:text-blue-300',
      badgeColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      cards: [
        { 
          term: { en: 'Set & Elements (∈, ∉)', vi: 'Tập hợp & Phần tử (∈, ∉)' }, 
          definition: { en: 'A collection of distinct objects called elements. Write x ∈ A if x belongs to A, and y ∉ A if y does not.', vi: 'Tập hợp bao gồm các phần tử xác định. Viết x ∈ A nếu x thuộc tập hợp A, và y ∉ A nếu y không thuộc tập A.' },
          formula: 'A = {x ∈ ℕ | x < 10}'
        },
        { 
          term: { en: 'Prime Number vs Composite Number', vi: 'Số nguyên tố & Hợp số' }, 
          definition: { en: 'A prime number is a natural number greater than 1 having only two factors: 1 and itself (2, 3, 5, 7, 11...). A composite number has more than two factors.', vi: 'Số nguyên tố là số tự nhiên lớn hơn 1 chỉ có hai ước là 1 và chính nó (2, 3, 5, 7, 11...). Hợp số là số tự nhiên lớn hơn 1 có nhiều hơn 2 ước.' },
          hint: { en: 'Number 0 and 1 are neither prime nor composite.', vi: 'Số 0 và số 1 không phải là số nguyên tố cũng không phải là hợp số.' }
        },
        { 
          term: { en: 'Greatest Common Divisor (GCD / ƯCLN)', vi: 'Ước chung lớn nhất (ƯCLN)' }, 
          definition: { en: 'The largest natural number that divides each given number without remainder. Found by product of common prime factors with smallest exponents.', vi: 'Số lớn nhất trong tập hợp các ước chung của các số. Tìm bằng tích các thừa số nguyên tố chung với số mũ nhỏ nhất.' },
          formula: 'ƯCLN(24, 36) = 2² × 3 = 12'
        },
        { 
          term: { en: 'Least Common Multiple (LCM / BCNN)', vi: 'Bội chung nhỏ nhất (BCNN)' }, 
          definition: { en: 'The smallest positive integer that is divisible by all given numbers. Found by product of common and distinct prime factors with greatest exponents.', vi: 'Số nguyên dương nhỏ nhất chia hết cho tất cả các số đã cho. Tìm bằng tích các thừa số nguyên tố chung và riêng với số mũ lớn nhất.' },
          formula: 'BCNN(12, 18) = 2² × 3² = 36'
        },
        { 
          term: { en: 'Integer Set Z & Negative Numbers', vi: 'Tập hợp số nguyên ℤ & Số nguyên âm' }, 
          definition: { en: 'Set Z consists of negative integers, zero, and positive integers: ℤ = {..., -2, -1, 0, 1, 2, ...}. Negative numbers represent debt, temperatures below 0°C, depths below sea level.', vi: 'Tập hợp ℤ gồm các số nguyên âm, số 0 và số nguyên dương: ℤ = {..., -2, -1, 0, 1, 2, ...}. Số nguyên âm dùng chỉ nhiệt độ dưới 0°C, độ sâu dưới mực nước biển.' }
        },
        { 
          term: { en: 'Parentheses Sign Rule', vi: 'Quy tắc dấu ngoặc' }, 
          definition: { en: 'When removing parentheses preceded by "+", keep all signs. When preceded by "-", flip every sign inside (+ becomes -, - becomes +).', vi: 'Khi bỏ dấu ngoặc có dấu "+" đằng trước, giữ nguyên dấu các số hạng. Khi bỏ dấu ngoặc có dấu "-" đằng trước, phải đổi dấu tất cả các số hạng bên trong.' },
          formula: 'a - (b - c + d) = a - b + c - d'
        },
        { 
          term: { en: 'Equivalent Fractions & Simplification', vi: 'Phân số bằng nhau & Rút gọn phân số' }, 
          definition: { en: 'Two fractions a/b and c/d are equal if a × d = b × c (b, d ≠ 0). Divide both numerator and denominator by their GCD to get irreducible fraction.', vi: 'Hai phân số a/b = c/d khi và chỉ khi a.d = b.c. Chia cả tử và mẫu cho ƯCLN của chúng để được phân số tối giản.' },
          formula: 'a/b = (a : m) / (b : m) với m = ƯCLN(|a|, |b|)'
        },
        { 
          term: { en: 'Percentage & Finding Value', vi: 'Tỉ số phần trăm & Hai bài toán cơ bản' }, 
          definition: { en: 'To find m% of number a, calculate a × (m/100). To find a number when knowing its m% equals b, calculate b : (m/100).', vi: 'Muốn tìm m% của số a, ta lấy a × (m/100). Muốn tìm một số biết m% của nó là b, ta lấy b : (m/100).' }
        },
        { 
          term: { en: 'Regular Hexagon & Equilateral Triangle', vi: 'Hình tam giác đều & Hình lục giác đều' }, 
          definition: { en: 'Equilateral triangle has 3 equal sides and 3 angles of 60°. Regular hexagon has 6 equal sides, 6 equal angles, and can be divided into 6 equilateral triangles.', vi: 'Tam giác đều có 3 cạnh bằng nhau và 3 góc bằng 60°. Lục giác đều có 6 cạnh bằng nhau, 6 góc bằng nhau và ghép từ 6 tam giác đều.' }
        },
        { 
          term: { en: 'Axis of Symmetry & Center of Symmetry', vi: 'Trục đối xứng & Tâm đối xứng' }, 
          definition: { en: 'A figure has an axis of symmetry if folding along the line makes both halves match exactly. It has a center of symmetry if rotating 180° around the center yields identical shape.', vi: 'Hình có trục đối xứng nếu gấp đôi theo đường thẳng hai nửa chồng khít lên nhau. Hình có tâm đối xứng nếu quay nửa vòng (180°) quanh điểm đó hình không đổi.' }
        }
      ]
    },
    {
      id: 'middle-literature',
      subject: 'Ngữ văn',
      subjectVi: 'Ngữ văn',
      subjectEn: 'Literature',
      title: { en: 'Literature 6 - Literary Genres & Rhetoric', vi: 'Ngữ văn 6 - Thể loại văn học & Tiếng Việt' },
      color: 'border-rose-500 bg-rose-50/50 dark:bg-rose-950/20 text-rose-700 dark:text-rose-300',
      badgeColor: 'bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-200',
      cards: [
        { 
          term: { en: 'Fable / Animal Allegory (Truyện đồng thoại)', vi: 'Truyện đồng thoại' }, 
          definition: { en: 'Stories written for children where animals and objects are personified to think, act, and speak like humans while retaining their biological traits (e.g., De Men Phieu Luu Ky).', vi: 'Truyện viết cho thiếu nhi trong đó các loài vật, đồ vật được nhân hóa sinh động, vừa mang đặc tính loài vừa có tâm hồn, suy nghĩ như con người (VD: Dế Mèn phiêu lưu ký).' }
        },
        { 
          term: { en: 'Six-Eight Verse (Thơ lục bát)', vi: 'Thể thơ lục bát' }, 
          definition: { en: 'Traditional Vietnamese poetic form alternating between 6-syllable and 8-syllable lines, with rhyming rules on syllables 6 and 8, and standard flat/sharp tone patterns.', vi: 'Thể thơ truyền thống của dân tộc Việt Nam gồm các cặp câu 6 tiếng (câu lục) và 8 tiếng (câu bát) xen kẽ, hiệp vần ở tiếng thứ 6 và tiếng thứ 8.' }
        },
        { 
          term: { en: 'Legend (Truyền thuyết)', vi: 'Truyền thuyết dân gian' }, 
          definition: { en: 'Folk narratives recounting historical figures and events with mythical and supernatural elements, expressing people\'s admiration and explanations of history (e.g., Thanh Giong).', vi: 'Thể loại truyện dân gian kể về nhân vật và sự kiện lịch sử qua các yếu tố tưởng tượng kì ảo, thể hiện thái độ và sự tôn vinh của nhân dân (VD: Thánh Gióng, Sơn Tinh Thủy Tinh).' }
        },
        { 
          term: { en: 'Fairy Tale (Truyện cổ tích)', vi: 'Truyện cổ tích' }, 
          definition: { en: 'Imaginative folk tales focusing on underprivileged characters (orphans, youngest siblings) embodying good triumphing over evil (e.g., Thach Sanh, Cay Khe).', vi: 'Truyện dân gian kể về số phận các kiểu nhân vật bất hạnh (mồ côi, người đội lốt), phản ánh ước mơ công lý: cái thiện luôn chiến thắng cái ác (VD: Thạch Sanh).' }
        },
        { 
          term: { en: 'Metaphor (Ẩn dụ)', vi: 'Biện pháp tu từ Ẩn dụ' }, 
          definition: { en: 'Calling an object or phenomenon by the name of another based on implicit similarity (appearance, function, perception), creating poetic richness.', vi: 'Gọi tên sự vật, hiện tượng này bằng tên sự vật, hiện tượng khác có nét tương đồng (về hình thức, cách thức, phẩm chất, cảm giác) nhằm tăng sức gợi hình, gợi cảm.' }
        },
        { 
          term: { en: 'Personification (Nhân hóa)', vi: 'Biện pháp tu từ Nhân hóa' }, 
          definition: { en: 'Attributing human traits, behaviors, emotions, or speech to animals, plants, or inanimate objects.', vi: 'Gán những từ ngữ chỉ đặc điểm, hành động, tâm trạng hoặc cách xưng hô của con người cho loài vật, cây cối hoặc đồ vật.' }
        },
        { 
          term: { en: 'Argumentative Text (Văn bản nghị luận)', vi: 'Văn bản nghị luận' }, 
          definition: { en: 'Text written to convince readers of an opinion or viewpoint using clear claims, well-reasoned arguments, and authentic evidence.', vi: 'Văn bản được viết nhằm thuyết phục người đọc về một vấn đề đời sống hoặc văn học thông qua hệ thống luận điểm, lí lẽ xác đáng và bằng chứng thuyết phục.' }
        },
        { 
          term: { en: 'Informational Text (Văn bản thông tin)', vi: 'Văn bản thông tin' }, 
          definition: { en: 'Non-fiction text designed to provide accurate facts, explanations, instructions, or historical/scientific data (e.g., Earth - Cradle of Life).', vi: 'Văn bản chủ yếu cung cấp thông tin, dữ liệu khoa học, quy trình hoặc sự kiện khách quan, chính xác (VD: Trái Đất - cái nôi của sự sống).' }
        }
      ]
    },
    {
      id: 'middle-science',
      subject: 'Khoa học tự nhiên',
      subjectVi: 'Khoa học tự nhiên',
      subjectEn: 'Natural Science',
      title: { en: 'Natural Science 6 - Matter, Cells & Forces', vi: 'Khoa học Tự nhiên 6 - Chất, Tế bào, Lực & Năng lượng' },
      color: 'border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/20 text-emerald-700 dark:text-emerald-300',
      badgeColor: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200',
      cards: [
        { 
          term: { en: 'Cell - Fundamental Unit of Life', vi: 'Tế bào - Đơn vị cơ sở của sự sống' }, 
          definition: { en: 'The smallest structural and functional unit of all living organisms. Major parts: plasma membrane (controls exchange), cytoplasm (metabolic site), and nucleus/nucleoid (contains DNA).', vi: 'Đơn vị cấu trúc và chức năng nhỏ nhất của mọi sinh vật sống. Cấu tạo cơ bản gồm: màng tế bào (bảo vệ và trao đổi chất), tế bào chất (chứa bào quan) và nhân/vùng nhân (chứa vật chất di truyền).' }
        },
        { 
          term: { en: 'Prokaryotic vs Eukaryotic Cells', vi: 'Tế bào Nhân sơ & Tế bào Nhân thực' }, 
          definition: { en: 'Prokaryotes (bacteria) lack nuclear membrane (only a nucleoid area). Eukaryotes (plants, animals, fungi) have true nucleus surrounded by nuclear membrane and complex organelles.', vi: 'Tế bào nhân sơ (vi khuẩn) chưa có màng nhân bao bọc (chỉ có vùng nhân). Tế bào nhân thực (thực vật, động vật, nấm) có nhân hoàn chỉnh với màng nhân và nhiều bào quan có màng.' }
        },
        { 
          term: { en: 'States of Matter (Solid, Liquid, Gas)', vi: 'Ba thể của chất (Rắn, Lỏng, Khí)' }, 
          definition: { en: 'Solid: fixed shape and volume, tightly packed particles. Liquid: fixed volume, takes shape of container, moving particles. Gas: no fixed shape or volume, highly compressible, particles move freely.', vi: 'Thể rắn: hình dạng và thể tích xác định, hạt liên kết chặt chẽ. Thể lỏng: thể tích xác định, hình dạng phụ thuộc bình chứa. Thể khí: không có hình dạng và thể tích xác định, dễ nén, chuyển động hỗn loạn.' }
        },
        { 
          term: { en: 'Air Composition & Oxygen (O₂)', vi: 'Thành phần không khí & Khí Oxygen' }, 
          definition: { en: 'Dry air consists of ~78% Nitrogen (N₂), ~21% Oxygen (O₂), and 1% Argon, CO₂, and other gases. Oxygen supports respiration and combustion, odorless and colorless.', vi: 'Không khí sạch gồm khoảng 78% khí Nitrogen, 21% khí Oxygen, và 1% Carbon dioxide, hơi nước và khí hiếm. Oxygen duy trì sự thở và sự cháy, không màu, không mùi.' }
        },
        { 
          term: { en: 'Force & Unit of Measurement (Newton)', vi: 'Lực & Đơn vị đo lực (Newton)' }, 
          definition: { en: 'Force is a push or pull on an object resulting in deformation or change in state of motion. Represented as a vector (magnitude, direction, point of application). Unit: Newton (N).', vi: 'Lực là tác dụng đẩy hoặc kéo của vật này lên vật khác, làm thay đổi vận tốc hoặc gây biến dạng. Biểu diễn bằng mũi tên có gốc, hướng và độ lớn. Đơn vị: Newton (N).' }
        },
        { 
          term: { en: 'Frictional Force (Ma sát)', vi: 'Lực ma sát (Trượt, Lăn, Nghỉ)' }, 
          definition: { en: 'Force opposing relative motion between surfaces in contact. Static friction prevents sliding, sliding friction occurs when sliding, and rolling friction occurs when rolling.', vi: 'Lực cản trở chuyển động của vật này trên bề mặt vật khác khi tiếp xúc. Gồm ma sát nghỉ (giữ vật đứng yên), ma sát trượt và ma sát lăn (ma sát lăn nhỏ hơn nhiều so với ma sát trượt).' }
        },
        { 
          term: { en: 'Gravity & Weight (P = 10m)', vi: 'Trọng lực & Trọng lượng (P = 10m)' }, 
          definition: { en: 'Gravity is Earth\'s gravitational attraction force directed toward Earth center. Weight P (in Newtons) equals mass m (in kilograms) multiplied by approximately 10.', vi: 'Trọng lực là lực hút của Trái Đất tác dụng lên vật, có phương thẳng đứng, chiều từ trên xuống dưới. Trọng lượng P (N) liên hệ với khối lượng m (kg) qua công thức P = 10m.' },
          formula: 'P (N) = 10 × m (kg)'
        },
        { 
          term: { en: 'Conservation of Energy Law', vi: 'Định luật Bảo toàn Năng lượng' }, 
          definition: { en: 'Energy cannot be created or destroyed; it can only transform from one form to another (e.g., potential to kinetic, chemical to thermal) or transfer between objects.', vi: 'Năng lượng không tự sinh ra cũng không tự mất đi; nó chỉ chuyển hóa từ dạng này sang dạng khác (thế năng sang động năng, hóa năng sang nhiệt năng) hoặc truyền từ vật này sang vật khác.' }
        }
      ]
    },
    {
      id: 'middle-history-geo',
      subject: 'Lịch sử & Địa lí',
      subjectVi: 'Lịch sử & Địa lí',
      subjectEn: 'History & Geography',
      title: { en: 'History & Geography 6 - Civilizations & Earth', vi: 'Lịch sử & Địa lí 6 - Nền văn minh cổ đại & Trái Đất' },
      color: 'border-amber-500 bg-amber-50/50 dark:bg-amber-950/20 text-amber-700 dark:text-amber-300',
      badgeColor: 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200',
      cards: [
        { 
          term: { en: 'Human Evolution (Vượn người -> Người tinh khôn)', vi: 'Quá trình tiến hóa của loài người' }, 
          definition: { en: 'Ancient Apes (approx. 6-5 million years ago) evolved into Homo erectus (around 4 million years ago) and Homo sapiens (Modern Humans, around 150,000 years ago).', vi: 'Vượn người (khoảng 6-5 triệu năm trước) tiến hóa thành Người tối cổ (khoảng 4 triệu năm trước, biết dùng lửa) và Người tinh khôn (khoảng 150.000 năm trước, cơ thể hoàn chỉnh như ngày nay).' }
        },
        { 
          term: { en: 'Ancient Civilizations of East (Egypt & Mesopotamia)', vi: 'Văn minh cổ đại Phương Đông (Ai Cập & Lưỡng Hà)' }, 
          definition: { en: 'Formed on fertile river valleys (Nile River in Egypt; Tigris & Euphrates in Mesopotamia). Known for irrigation, pictographic/cuneiform writing, lunar calendar, and pyramids.', vi: 'Hình thành trên lưu vực các con sông lớn màu mỡ (sông Nin ở Ai Cập; sông Ti-gơ-rơ và Ơ-phơ-rát ở Lưỡng Hà). Phát minh chữ tượng hình, chữ hình nêm, nông nghiệp lúa nước và Kim tự tháp.' }
        },
        { 
          term: { en: 'State of Van Lang - Au Lac', vi: 'Nhà nước Văn Lang & Âu Lạc' }, 
          definition: { en: 'The first states in Vietnamese history. Van Lang ruled by Hung Kings (capital: Phong Chau), succeeded by King An Duong Vuong of Au Lac who built the spiral Co Loa citadel.', vi: 'Những nhà nước đầu tiên trong lịch sử Việt Nam. Văn Lang do các Vua Hùng đứng đầu (kinh đô Phong Châu), tiếp nối là nhà nước Âu Lạc của An Dương Vương với thành Cổ Loa kiên cố.' }
        },
        { 
          term: { en: 'Battle of Bach Dang (938 AD)', vi: 'Chiến thắng Bạch Đằng năm 938' }, 
          definition: { en: 'Ngo Quyen defeated the Southern Han army using iron-tipped wooden stakes hidden under high tide, completely ending over 1,000 years of Chinese feudal domination.', vi: 'Ngô Quyền lãnh đạo nhân dân đánh tan quân Nam Hán trên sông Bạch Đằng bằng bãi cọc nhọn bọc sắt đón thủy triều, chấm dứt hơn 1000 năm Bắc thuộc, mở ra kỉ nguyên độc lập lâu dài.' }
        },
        { 
          term: { en: 'Latitude, Longitude & Geographic Coordinates', vi: 'Kinh tuyến, Vĩ tuyến & Tọa độ địa lí' }, 
          definition: { en: 'Meridians are half-circles connecting the North and South poles (0° Prime Meridian at Greenwich). Parallels are circles parallel to the Equator (0°).', vi: 'Kinh tuyến là nửa đường tròn nối hai cực Bắc - Nam (Kinh tuyến 0° đi qua đài Greenwich). Vĩ tuyến là đường tròn song song xích đạo (Vĩ tuyến 0°). Kinh độ và vĩ độ hợp thành tọa độ địa lí.' }
        },
        { 
          term: { en: 'Earth in the Solar System & Motions', vi: 'Trái Đất & Các chuyển động chính' }, 
          definition: { en: 'Earth is 3rd planet from the Sun. It rotates on its tilted axis (23.5°) every 24 hours (causing alternating day/night) and revolves around Sun in 365.25 days (causing seasons).', vi: 'Trái Đất là hành tinh thứ 3 từ Mặt Trời. Tự quay quanh trục nghiêng 66°33\' theo hướng Tây - Đông mất 24h (sinh ra ngày đêm luân phiên) và quay quanh Mặt Trời mất 365 ngày 6 giờ (sinh ra các mùa).' }
        },
        { 
          term: { en: 'Atmospheric Layers & Weather vs Climate', vi: 'Khí quyển, Thời tiết & Khí hậu' }, 
          definition: { en: 'Troposphere (lowest layer, holds 80% air mass, where rain/wind occur). Weather describes short-term atmospheric conditions; climate describes long-term historical weather pattern.', vi: 'Tầng đối lưu là tầng thấp nhất, chứa 80% khối lượng không khí, nơi sinh ra mọi hiện tượng thời tiết (mây, mưa, gió). Thời tiết là trạng thái khí quyển tức thời, còn khí hậu là quy luật lặp lại lâu năm.' }
        },
        { 
          term: { en: 'Global Hydrological Cycle (Vòng tuần hoàn nước)', vi: 'Vòng tuần hoàn lớn của nước' }, 
          definition: { en: 'Continuous movement of water: Solar heat evaporates water from oceans -> water vapor condenses into clouds -> precipitates as rain/snow -> groundwater/rivers return to ocean.', vi: 'Năng lượng mặt trời làm bốc hơi nước từ đại dương -> hơi nước ngưng tụ thành mây -> giáng thủy dưới dạng mưa/tuyết -> nước ngấm thành nước ngầm và dòng sông đổ về biển cả.' }
        }
      ]
    },
    {
      id: 'middle-english',
      subject: 'Tiếng Anh',
      subjectVi: 'Tiếng Anh',
      subjectEn: 'English',
      title: { en: 'English 6 - Global Success Core Grammar & Vocabulary', vi: 'Tiếng Anh 6 - Ngữ pháp & Từ vựng trọng tâm (Global Success)' },
      color: 'border-indigo-500 bg-indigo-50/50 dark:bg-indigo-950/20 text-indigo-700 dark:text-indigo-300',
      badgeColor: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200',
      cards: [
        { 
          term: { en: 'Present Simple Tense (Thì hiện tại đơn)', vi: 'Thì Hiện tại đơn' }, 
          definition: { en: 'Expresses habits, daily routines, and universal truths. Structure: S + V(s/es) for positive; S + do/does not + V(bare) for negative.', vi: 'Diễn tả thói quen, hành động lặp đi lặp lại hoặc chân lý sự thật hiển nhiên. Cấu trúc: S + V(s/es) (Khẳng định); S + don\'t/doesn\'t + V(nguyên mẫu) (Phủ định).' },
          formula: 'He walks to school every morning.'
        },
        { 
          term: { en: 'Present Continuous Tense (Thì hiện tại tiếp diễn)', vi: 'Thì Hiện tại tiếp diễn' }, 
          definition: { en: 'Describes actions happening right now at the moment of speaking or future fixed arrangements. Structure: S + am/is/are + V-ing.', vi: 'Diễn tả hành động đang diễn ra ngay tại thời điểm nói hoặc kế hoạch tương lai chắc chắn. Cấu trúc: S + am/is/are + V-ing.' },
          formula: 'They are studying Science in the laboratory now.'
        },
        { 
          term: { en: 'Comparative Adjectives (So sánh hơn)', vi: 'So sánh hơn với tính từ' }, 
          definition: { en: 'Short adjectives: S1 + is/are + adj-er + than + S2 (faster, older). Long adjectives: S1 + is/are + more + adj + than + S2 (more peaceful, more modern).', vi: 'Tính từ ngắn: adj + er + than (VD: taller than). Tính từ dài: more + adj + than (VD: more modern than).' },
          formula: 'Hanoi is larger than Da Nang.'
        },
        { 
          term: { en: 'Superlative Adjectives (So sánh nhất)', vi: 'So sánh nhất với tính từ' }, 
          definition: { en: 'Short adjectives: S + is/are + the adj-est (the oldest, the tallest). Long adjectives: S + is/are + the most + adj (the most beautiful, the most famous).', vi: 'Tính từ ngắn: the + adj + est (the oldest). Tính từ dài: the most + adj (the most famous).' },
          formula: 'Mount Everest is the highest mountain in the world.'
        },
        { 
          term: { en: 'Modal Verbs: Must vs Mustn\'t', vi: 'Động từ khuyết thiếu: Must & Mustn\'t' }, 
          definition: { en: 'Must expresses strict obligation or rule. Mustn\'t expresses prohibition (do not do it). Followed by bare infinitive.', vi: 'Must dùng chỉ sự bắt buộc phải làm theo nội quy. Mustn\'t dùng chỉ điều bị cấm tuyệt đối không được làm.' },
          formula: 'You mustn\'t litter in the national park.'
        },
        { 
          term: { en: 'Advice: Should & Shouldn\'t', vi: 'Lời khuyên: Should & Shouldn\'t' }, 
          definition: { en: 'Used to give recommendations and advice on what is good or bad to do. S + should/shouldn\'t + V(infinitive).', vi: 'Dùng để đưa ra lời khuyên nên hay không nên làm điều gì. Cấu trúc: S + should/shouldn\'t + V-bare.' },
          formula: 'Children should help their parents clean the house before Tet.'
        },
        { 
          term: { en: 'The 3Rs: Reduce, Reuse, Recycle', vi: 'Quy tắc 3R bảo vệ môi trường' }, 
          definition: { en: 'Reduce: cut down on consumption. Reuse: use items multiple times. Recycle: process used materials to create new products.', vi: 'Reduce (Giảm thiểu rác thải), Reuse (Tái sử dụng đồ dùng cũ), Recycle (Tái chế rác thành sản phẩm mới).' }
        },
        { 
          term: { en: 'Conditional Sentence Type 1', vi: 'Câu điều kiện loại 1' }, 
          definition: { en: 'Describes realistic future possibilities. If-clause uses Present Simple, main clause uses Future Simple (will + V).', vi: 'Diễn tả hành động có thể xảy ra ở hiện tại hoặc tương lai. Mệnh đề If dùng Hiện tại đơn, mệnh đề chính dùng Will + V-bare.' },
          formula: 'If we plant more trees, the air will be cleaner.'
        }
      ]
    },
    {
      id: 'middle-civics',
      subject: 'GDCD',
      subjectVi: 'Giáo dục công dân',
      subjectEn: 'Civic Education',
      title: { en: 'Civic Education 6 - Ethics, Values & Child Rights', vi: 'Giáo dục Công dân 6 - Đạo đức, Giá trị sống & Quyền trẻ em' },
      color: 'border-cyan-500 bg-cyan-50/50 dark:bg-cyan-950/20 text-cyan-700 dark:text-cyan-300',
      badgeColor: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200',
      cards: [
        { 
          term: { en: 'Family & Ancestral Traditions', vi: 'Tự hào về truyền thống gia đình, dòng họ' }, 
          definition: { en: 'Good moral values, craftsmanship, and achievements handed down through generations (hiếu thảo, cần cù, hiếu học, làng nghề truyền thống).', vi: 'Những giá trị tốt đẹp của gia đình, dòng họ được truyền từ thế hệ này sang thế hệ khác như: hiếu thảo, cần cù, hiếu học, nghề truyền thống tốt đẹp.' }
        },
        { 
          term: { en: 'Love for Humanity (Yêu thương con người)', vi: 'Yêu thương con người' }, 
          definition: { en: 'Caring, sharing, and assisting people in hardship without expecting personal benefits. Opposes selfishness and cruelty.', vi: 'Sự quan tâm, giúp đỡ, làm những điều tốt đẹp cho người khác, nhất là khi họ gặp hoạn nạn khó khăn, không vì vụ lợi cá nhân.' }
        },
        { 
          term: { en: 'Diligence & Perseverance (Siêng năng, kiên trì)', vi: 'Siêng năng và kiên trì' }, 
          definition: { en: 'Diligence is working hard continuously. Perseverance is staying dedicated to overcome hardships and obstacles to achieve meaningful goals.', vi: 'Siêng năng là làm việc tự giác, cần cù, đều đặn. Kiên trì là quyết tâm làm đến cùng dù gặp khó khăn, thử thách.' }
        },
        { 
          term: { en: 'Respect for Truth (Tôn trọng sự thật)', vi: 'Tôn trọng sự thật' }, 
          definition: { en: 'Acknowledging and defending what objectively happened; being honest with oneself and others; opposing deception, fraud, and slander.', vi: 'Công nhận, ủng hộ và bảo vệ những điều đúng đắn, khách quan; không dối trá, không bao che cho việc làm sai trái.' }
        },
        { 
          term: { en: 'Independence & Self-Reliance (Tự lập)', vi: 'Tính tự lập' }, 
          definition: { en: 'Actively doing one\'s own duties in daily life and studies without undue reliance, dependence, or demanding support from others.', vi: 'Tự làm lấy công việc của mình trong học tập và đời sống, không ỷ lại hay trông chờ dựa dẫm vào người khác.' }
        },
        { 
          term: { en: 'Children\'s 4 Fundamental Rights', vi: '4 Nhóm quyền cơ bản của trẻ em' }, 
          definition: { en: '1. Right to Survival (life, health, nutrition); 2. Right to Protection (from abuse, violence); 3. Right to Development (education, recreation); 4. Right to Participation (voicing opinions).', vi: '1. Nhóm quyền Sống còn (được sống, chăm sóc sức khỏe); 2. Nhóm quyền Bảo vệ (chống bạo lực, bóc lột); 3. Nhóm quyền Phát triển (học tập, vui chơi giải trí); 4. Nhóm quyền Tham gia (bày tỏ ý kiến).' }
        }
      ]
    },
    {
      id: 'middle-informatics',
      subject: 'Tin học',
      subjectVi: 'Tin học',
      subjectEn: 'Informatics',
      title: { en: 'Informatics 6 - Information, Algorithms & Scratch', vi: 'Tin học 6 - Dữ liệu, Mạng máy tính, Thuật toán & Lập trình' },
      color: 'border-purple-500 bg-purple-50/50 dark:bg-purple-950/20 text-purple-700 dark:text-purple-300',
      badgeColor: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
      cards: [
        { 
          term: { en: 'Data vs Information (Dữ liệu & Thông tin)', vi: 'Dữ liệu & Thông tin' }, 
          definition: { en: 'Data consists of raw numbers, texts, sounds, or images recorded. Information is data that has been organized and processed into meaningful human understanding.', vi: 'Dữ liệu là các số liệu, văn bản, hình ảnh, âm thanh được ghi lại. Thông tin là sự hiểu biết của con người sau khi đã tiếp nhận và xử lý dữ liệu.' }
        },
        { 
          term: { en: 'Bit, Byte & Storage Units', vi: 'Bit, Byte & Đơn vị đo dung lượng thông tin' }, 
          definition: { en: 'A bit (0 or 1) is the basic unit of information. 1 Byte = 8 bits; 1 Kilobyte (KB) = 1024 Bytes; 1 Megabyte (MB) = 1024 KB; 1 Gigabyte (GB) = 1024 MB; 1 Terabyte (TB) = 1024 GB.', vi: 'Bit là đơn vị nhỏ nhất để lưu trữ thông tin (chỉ nhận giá trị 0 hoặc 1). 1 Byte = 8 bits; 1 KB = 1024 Bytes; 1 MB = 1024 KB; 1 GB = 1024 MB; 1 TB = 1024 GB.' },
          formula: '1 Byte = 8 Bits • 1 KB = 1024 Bytes'
        },
        { 
          term: { en: 'Computer Network & Internet', vi: 'Mạng máy tính & Mạng Internet' }, 
          definition: { en: 'A computer network is a system of interconnected devices sharing data and resources. The Internet is the global network of millions of interconnected private and public networks.', vi: 'Mạng máy tính gồm các thiết bị được kết nối với nhau để truyền tải và chia sẻ thông tin, tài nguyên. Internet là mạng máy tính toàn cầu kết nối hàng triệu mạng nhỏ.' }
        },
        { 
          term: { en: 'Algorithm (Thuật toán)', vi: 'Thuật toán & 3 Tính chất cốt lõi' }, 
          definition: { en: 'A finite sequence of precise, step-by-step instructions to solve a problem or achieve a goal. Key traits: Finiteness (must terminate), Definiteness (unambiguous steps), Correctness.', vi: 'Dãy các chỉ dẫn từng bước rõ ràng, xác định để giải quyết một bài toán hay nhiệm vụ cụ thể. 3 tính chất: Tính dừng (kết thúc sau số bước hữu hạn), Tính xác định, Tính đúng đắn.' }
        },
        { 
          term: { en: 'Flowchart Symbols (Sơ đồ khối)', vi: 'Các hình chuẩn trong Sơ đồ khối' }, 
          definition: { en: 'Oval: Start/End; Rectangle: Calculation/Operation; Diamond: Decision/Condition check; Parallelogram: Input/Output; Arrows: Flow of execution.', vi: 'Hình Oval: Bắt đầu/Kết thúc; Hình chữ nhật: Bước xử lý, tính toán; Hình thoi: Kiểm tra điều kiện rẽ nhánh; Hình bình hành: Nhập/Xuất dữ liệu; Mũi tên: Hướng thực hiện.' }
        },
        { 
          term: { en: 'Visual Block Programming (Scratch)', vi: 'Lập trình trực quan (Khối lệnh Scratch)' }, 
          definition: { en: 'Coding paradigm where learners snap together visual blocks (Motion, Looks, Control, Sensing, Loops, Variables) to build games and animations without syntax typos.', vi: 'Phương pháp lập trình ghép nối các khối lệnh trực quan đầy màu sắc (Chuyển động, Hiển thị, Điều khiển lặp, Cảm biến, Biến số) giúp rèn luyện tư duy logic.' }
        }
      ]
    },
    {
      id: 'middle-technology',
      subject: 'Công nghệ',
      subjectVi: 'Công nghệ',
      subjectEn: 'Technology',
      title: { en: 'Technology 6 - Living, Nutrition & Home Electronics', vi: 'Công nghệ 6 - Nhà ở, Dinh dưỡng & Thiết bị điện gia đình' },
      color: 'border-teal-500 bg-teal-50/50 dark:bg-teal-950/20 text-teal-700 dark:text-teal-300',
      badgeColor: 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200',
      cards: [
        { 
          term: { en: 'Smart Home (Ngôi nhà thông minh)', vi: 'Ngôi nhà thông minh (Smart Home)' }, 
          definition: { en: 'A dwelling equipped with automated electronic and telecommunication systems that allow occupants to monitor and control lighting, climate, security, and appliances remotely.', vi: 'Ngôi nhà được trang bị hệ thống thiết bị điện - điện tử tự động hóa, có thể điều khiển từ xa hoặc tự động cảm biến nhằm nâng cao tiện nghi, an ninh và tiết kiệm năng lượng.' }
        },
        { 
          term: { en: '4 Essential Nutrient Groups (4 Nhóm dinh dưỡng)', vi: '4 Nhóm chất dinh dưỡng thiết yếu' }, 
          definition: { en: '1. Carbohydrates (energy from rice, bread); 2. Proteins (cell growth from meat, fish, eggs); 3. Lipids (energy reserve, heat); 4. Vitamins & Minerals (immune resistance from vegetables, fruits).', vi: '1. Nhóm chất bột đường (Carbohydrate: gạo, bánh mì - cung cấp năng lượng); 2. Nhóm chất đạm (Protein: thịt, cá, trứng); 3. Nhóm chất béo (Lipid); 4. Nhóm vitamin và khoáng chất (rau củ quả).' }
        },
        { 
          term: { en: 'Food Preservation Methods', vi: 'Các phương pháp bảo quản thực phẩm' }, 
          definition: { en: 'Techniques that inhibit bacterial decay: Refrigeration (0-5°C), Freezing (below -18°C), Salting, Drying (sun or oven dehydration), Canning, and Vacuum sealing.', vi: 'Phương pháp ngăn chặn vi sinh vật phát triển: Làm lạnh (0-5°C), Đông lạnh (dưới -18°C), Ướp muối, Phơi/sấy khô, Đóng hộp kín và Hút chân không.' }
        },
        { 
          term: { en: 'Fabric Types & Clothing Selection', vi: 'Các loại vải may mặc thông dụng' }, 
          definition: { en: 'Natural fabrics (cotton, silk: breathable, absorb moisture well, easily wrinkled); Synthetic fabrics (polyester, nylon: durable, wrinkle-resistant, dry quickly); Blended fabrics.', vi: 'Vải sợi tự nhiên (cotton, tơ tằm: thoáng mát, thấm mồ hôi, dễ nhăn); Vải sợi nhân tạo/tổng hợp (polyester: bền, không nhăn, nhanh khô); Vải sợi pha (kết hợp ưu điểm cả hai).' }
        },
        { 
          term: { en: 'Electro-thermal Appliances (Thiết bị điện nhiệt)', vi: 'Đồ dùng điện loại điện nhiệt' }, 
          definition: { en: 'Appliances that convert electrical energy into thermal heat through a high-resistance heating element (e.g., electric irons, rice cookers, water heaters).', vi: 'Đồ dùng biến đổi điện năng thành nhiệt năng dựa trên tác dụng nhiệt của dòng điện qua dây đốt nóng hợp kim chịu nhiệt (VD: Bàn là điện, Nồi cơm điện, Bình nước nóng).' }
        },
        { 
          term: { en: 'Electrical Safety at Home', vi: 'An toàn và tiết kiệm điện trong gia đình' }, 
          definition: { en: 'Never touch switches or plugs with wet hands; unplug appliances when not in use; install circuit breakers (Aptomat); replace frayed wires immediately.', vi: 'Tuyệt đối không chạm tay ướt vào công tắc hoặc phích cắm điện; ngắt nguồn khi sửa chữa; sử dụng aptomat chống giật; tắt các thiết bị khi không có nhu cầu sử dụng.' }
        }
      ]
    }
  ]
};

export default function Flashcards() {
  const { language, t } = useLanguage();
  const { profile } = useAuth();
  const navigate = useNavigate();
  const isVi = language === 'vi';

  const decks = ALL_GRADE_DECKS.middle;
  const [selectedDeckId, setSelectedDeckId] = useState<string>(decks[0].id);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [masteredCards, setMasteredCards] = useState<Record<string, boolean>>({});

  const currentDeck = decks.find(d => d.id === selectedDeckId) || decks[0];
  const currentCard = currentDeck.cards[currentIndex] || currentDeck.cards[0];

  const handleSelectDeck = (deckId: string) => {
    setSelectedDeckId(deckId);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex(prev => (prev + 1) % currentDeck.cards.length);
  };

  const handlePrevious = () => {
    setIsFlipped(false);
    setCurrentIndex(prev => (prev - 1 + currentDeck.cards.length) % currentDeck.cards.length);
  };

  const handleShuffle = () => {
    setIsFlipped(false);
    const randomIndex = Math.floor(Math.random() * currentDeck.cards.length);
    setCurrentIndex(randomIndex);
  };

  const toggleMastered = (cardKey: string) => {
    setMasteredCards(prev => ({
      ...prev,
      [cardKey]: !prev[cardKey]
    }));
  };

  const activeCardKey = `${selectedDeckId}-${currentIndex}`;
  const isMastered = !!masteredCards[activeCardKey];

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-16 animate-fade-in">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-[2rem] border-2 border-gray-100 dark:border-gray-700 shadow-sm">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-300 text-xs font-black uppercase tracking-wider mb-2">
            <GraduationCap className="w-4 h-4" />
            <span>{isVi ? `Khối lớp ${profile?.grade || 6} • GDPT 2018 Kết nối tri thức` : `Grade ${profile?.grade || 6} • Curriculum Flashcards`}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white">
            {t('flashcards.title')}
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 max-w-2xl font-medium">
            {t('flashcards.subtitle')}
          </p>
        </div>

        <button
          onClick={() => navigate('/practice')}
          className="px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 font-bold text-xs text-gray-700 dark:text-gray-200 flex items-center gap-2 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{isVi ? 'Quay lại Luyện tập' : 'Back to Practice'}</span>
        </button>
      </div>

      {/* Subject Filter Tabs - Covering ALL 8 Subjects */}
      <div className="space-y-2">
        <label className="text-xs font-black uppercase tracking-wider text-gray-400 block px-1">
          {t('flashcards.select_deck')} ({decks.length} {isVi ? 'môn học' : 'subjects'}):
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5">
          {decks.map(deck => {
            const isSelected = deck.id === selectedDeckId;
            return (
              <button
                key={deck.id}
                onClick={() => handleSelectDeck(deck.id)}
                className={`p-3 rounded-2xl border-2 text-left transition-all cursor-pointer flex flex-col justify-between h-20 ${
                  isSelected
                    ? 'border-teal-500 bg-teal-50 dark:bg-teal-950/50 shadow-md scale-102 ring-2 ring-teal-400/30'
                    : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className={`text-[10px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded-md ${deck.badgeColor}`}>
                    {deck.cards.length} {isVi ? 'thẻ' : 'cards'}
                  </span>
                </div>
                <div className={`font-black text-xs leading-snug truncate ${isSelected ? 'text-teal-900 dark:text-teal-100' : 'text-gray-800 dark:text-gray-200'}`}>
                  {isVi ? deck.subjectVi : deck.subjectEn}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Flashcard Active View Area */}
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Deck Title & Progress Counter */}
        <div className="flex items-center justify-between px-2">
          <div className="flex items-center gap-2">
            <span className={`px-3 py-1 rounded-full text-xs font-black ${currentDeck.badgeColor}`}>
              {isVi ? currentDeck.subjectVi : currentDeck.subjectEn}
            </span>
            <span className="text-xs font-bold text-gray-500 dark:text-gray-400">
              {currentIndex + 1} / {currentDeck.cards.length}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => toggleMastered(activeCardKey)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                isMastered 
                  ? 'bg-emerald-500 text-white shadow-sm' 
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200'
              }`}
            >
              <CheckCircle className="w-3.5 h-3.5" />
              <span>{isMastered ? (isVi ? 'Đã nhớ' : 'Mastered') : (isVi ? 'Đánh dấu đã nhớ' : 'Mark Mastered')}</span>
            </button>
          </div>
        </div>

        {/* 3D Flip Card Container */}
        <div 
          onClick={() => setIsFlipped(!isFlipped)}
          className="relative min-h-[340px] sm:min-h-[380px] w-full rounded-3xl cursor-pointer p-8 flex flex-col justify-between transition-all duration-300 shadow-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-xl hover:border-teal-400 select-none group"
        >
          {/* Card Top Indicator */}
          <div className="flex items-center justify-between text-xs text-gray-400 font-bold">
            <span className="flex items-center gap-1.5">
              <RotateCw className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-500 text-teal-600" />
              <span>{isFlipped ? (isVi ? 'Mặt sau (Giải thích)' : 'Back (Definition)') : (isVi ? 'Mặt trước (Khái niệm)' : 'Front (Term)')}</span>
            </span>
            <span className="text-[11px] bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded-md">
              {t('flashcards.flip_hint')}
            </span>
          </div>

          {/* Card Main Body */}
          <div className="my-auto py-6 text-center space-y-4">
            {!isFlipped ? (
              <div className="space-y-4 animate-in fade-in duration-200">
                <div className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white leading-snug">
                  {isVi ? currentCard.term.vi : currentCard.term.en}
                </div>
                <div className="text-sm font-semibold text-gray-400 dark:text-gray-500">
                  {isVi ? currentCard.term.en : currentCard.term.vi}
                </div>
                {currentCard.formula && (
                  <div className="inline-block px-4 py-2 rounded-xl bg-teal-50 dark:bg-teal-950/50 border border-teal-200 dark:border-teal-800 text-teal-800 dark:text-teal-200 font-mono text-sm font-black">
                    {currentCard.formula}
                  </div>
                )}
              </div>
            ) : (
              <div className="space-y-4 animate-in fade-in duration-200">
                <div className="text-base sm:text-lg font-medium text-gray-800 dark:text-gray-100 leading-relaxed max-w-xl mx-auto">
                  {isVi ? currentCard.definition.vi : currentCard.definition.en}
                </div>
                {currentCard.hint && (
                  <div className="p-3 bg-amber-50 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-800 text-xs text-amber-900 dark:text-amber-200 font-medium">
                    💡 <strong>{isVi ? 'Mẹo nhớ:' : 'Tip:'}</strong> {isVi ? currentCard.hint.vi : currentCard.hint.en}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Card Bottom Progress Bar */}
          <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-1.5 overflow-hidden">
            <div 
              className="bg-teal-500 h-full rounded-full transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / currentDeck.cards.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Navigation Action Buttons */}
        <div className="flex items-center justify-between gap-3 pt-2">
          <button
            onClick={handlePrevious}
            className="flex-1 py-3 px-4 rounded-2xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-gray-300 font-black text-xs text-gray-700 dark:text-gray-200 flex items-center justify-center gap-2 shadow-xs transition-all active:scale-95 cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>{t('flashcards.previous')}</span>
          </button>

          <button
            onClick={handleShuffle}
            className="p-3 rounded-2xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-gray-300 text-gray-600 dark:text-gray-300 shadow-xs transition-all active:scale-95 cursor-pointer"
            title={t('flashcards.shuffle')}
          >
            <Shuffle className="w-4 h-4" />
          </button>

          <button
            onClick={handleNext}
            className="flex-1 py-3 px-4 rounded-2xl bg-teal-600 hover:bg-teal-700 text-white font-black text-xs flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 cursor-pointer"
          >
            <span>{t('flashcards.next')}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
