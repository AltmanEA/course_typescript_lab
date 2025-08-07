/* 
	Разработать класс Logger, содержащий статическое свойство logLevel, определяющее уровень логирования ("INFO", "WARNING", "ERROR") и статическим методом, позволяющим установить уровень логирования. Реализуйте статический метод logMessage, возращающий строку с указанием текущего уровня и сообщением (например, "[INFO] Test message").
*/

type LogLevel = 'INFO' | 'WARNING' | 'ERROR';

export class Logger {
    private static logLevel: LogLevel = 'INFO';

    public static setLogLevel(level: LogLevel): void {
        Logger.logLevel = level;
    }

    public static logMessage(message: string): string {

    }
}

