export const useTranslations = () => {
  const { currentLanguage } = useLanguage();

  const translations = {
    en: {
      // Home page
      greeting: "Hi, I'm",
      name: "Kizuren",
      role: "Developer & Creator",
      intro1: "I'm passionate about creating things and sharing them with the community.",
      intro2: "Explore my",
      intro3: "check out the",
      intro4: "I've worked on, or check out the",
      intro5: "I have been working with.",
      projects: "Projects",
      games: "Games",
      teams: "teams",
      contact: "Contact",
      github: "GitHub",
      
      // Navigation
      nav: {
        home: "Home",
        projects: "Projects",
        hire: "Hire Me",
        contact: "Contact",
        discord: "Discord",
        mail: "Mail"
      },

      // Footer
      footer: {
        rights: "All rights reserved",
        discord: "Discord",
        github: "GitHub",
        switchLanguage: "日本語版"
      },

      // Projects page
      projectsPage: {
        title: "Projects",
        github: "GitHub",
        status: "Status",
        myProjects: "My Projects",
        hostedServices: "Hosted Services",
        games: "Games",
        teams: "Teams",
        released: "Released",
        abandoned: "Abandoned",
        inDevelopment: "In Development"
      },

      // Contact page
      contactPage: {
        title: "Contact",
        discord: "Discord",
        mail: "Mail",
        emailLabel: "Email Address",
        emailPlaceholder: "your.email@example.com",
        subjectLabel: "Message Subject",
        subjectPlaceholder: "What is this about?",
        messageLabel: "Your Message",
        messagePlaceholder: "Your message here...",
        sendButton: "Send Message",
        successTitle: "Message Sent!",
        successDesc: "Your message has been sent successfully.",
        errorTitle: "Error",
        errorDesc: "Something went wrong. Please try again.",
        emailRequired: "Please enter a valid email address",
        subjectRequired: "Subject must be at least 3 characters",
        messageRequired: "Message must be at least 10 characters"
      },

      // Hire page
      hirePage: {
        title: "Hire Me",
        intro: "If you want to collaborate on a project or work together, feel free to",
        contactLink: "contact",
        introEnd: "me! I could be interested. :)",
        primarySkills: "Primary Skills",
        skills: {
          backend: "Backend",
          devops: "DevOps",
          sysadmin: "SysAdmin",
          networking: "Networking"
        },
        primaryLanguages: "Primary Languages",
        price: "Price",
        priceText: "Free, if I am interested :)"
      }
    },
    ja: {
      // Home page
      greeting: "こんにちは、私は",
      name: "キズレン",
      role: "開発者＆クリエイター",
      intro1: "私は物を作り、コミュニティと共有することに情熱を持っています。",
      intro2: "私の",
      intro3: "をご覧ください。作業した",
      intro4: "や、一緒に作業している",
      intro5: "もチェックしてください。",
      projects: "プロジェクト",
      games: "ゲーム",
      teams: "チーム",
      contact: "お問い合わせ",
      github: "GitHub",
      
      // Navigation
      nav: {
        home: "ホーム",
        projects: "プロジェクト",
        hire: "採用情報",
        contact: "お問い合わせ",
        discord: "Discord",
        mail: "メール"
      },

      // Footer
      footer: {
        rights: "全著作権所有",
        discord: "Discord",
        github: "GitHub",
        switchLanguage: "English version"
      },

      // Projects page
      projectsPage: {
        title: "プロジェクト",
        github: "GitHub",
        status: "ステータス",
        myProjects: "私のプロジェクト",
        hostedServices: "ホスティングサービス",
        games: "ゲーム",
        teams: "チーム",
        released: "リリース済み",
        abandoned: "中止",
        inDevelopment: "開発中"
      },

      // Contact page
      contactPage: {
        title: "お問い合わせ",
        discord: "Discord",
        mail: "メール",
        emailLabel: "メールアドレス",
        emailPlaceholder: "your.email@example.com",
        subjectLabel: "件名",
        subjectPlaceholder: "お問い合わせ内容は？",
        messageLabel: "メッセージ",
        messagePlaceholder: "メッセージをここに入力してください...",
        sendButton: "送信",
        successTitle: "送信完了！",
        successDesc: "メッセージが正常に送信されました。",
        errorTitle: "エラー",
        errorDesc: "問題が発生しました。もう一度お試しください。",
        emailRequired: "有効なメールアドレスを入力してください",
        subjectRequired: "件名は3文字以上である必要があります",
        messageRequired: "メッセージは10文字以上である必要があります"
      },

      // Hire page
      hirePage: {
        title: "採用情報",
        intro: "プロジェクトでのコラボレーションや一緒に仕事をしたい場合は、お気軽に",
        contactLink: "お問い合わせ",
        introEnd: "ください！興味があります。:)",
        primarySkills: "主なスキル",
        skills: {
          backend: "バックエンド",
          devops: "DevOps",
          sysadmin: "システム管理",
          networking: "ネットワーキング"
        },
        primaryLanguages: "主な言語",
        price: "料金",
        priceText: "興味があれば無料です :)"
      }
    }
  };

  const t = computed(() => translations[currentLanguage.value]);

  return {
    t,
    currentLanguage
  };
};
