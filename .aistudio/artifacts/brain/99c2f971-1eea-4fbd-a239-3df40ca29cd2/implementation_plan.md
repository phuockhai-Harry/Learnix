# Implementation Plan - Educational Platform Enhancements & Fixes

## 1. Virtual Study Rooms Feature
- Create `src/pages/StudyRooms.tsx` enabling students and teachers to join subject-specific virtual study rooms.
- Features real-time chat messages, online participants list, message timestamps, and simulated peer collaboration.
- Add route in `App.tsx` and navigation tab in `Layout.tsx`.

## 2. Language Switcher & UI Cleanup
- Update language switcher (`Layout.tsx` / `i18n.tsx`) to show current language label instead of target language. Ensure all components respond dynamically.
- Remove the generic "CLOUD SYNCHRONIZED" button across all tabs.
- Fix UI element overlaps (e.g., chatbot toolbar header and floating badges).
- Remove the "Select school year" grade selector from student dashboard/explore since grade is managed in the Account page.
- Delete the "Change role" button and dropdown.
- Prevent admins from deleting their own account in Account/Admin settings.
- Minimize/collapse the "Detailed Quiz History & Teacher Feedback" section on student reports/dashboard.

## 3. Comprehensive Quizzes, Flashcards & Study PDFs
- Update quiz banks in `curriculumData.ts` (and subject files) to ensure at least 18 questions per curriculum quiz.
- Add comprehensive flashcard sets for all subjects.
- Add authoritative study PDFs based on `giaokhoaonline.com/ket-noi-tri-thuc-voi-cuoc-song-lop-6/` and GDPT 2018 standards.
