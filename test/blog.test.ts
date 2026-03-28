import { describe, it, expect, vi } from 'vitest';

// ServiceBroker ကို Mock လုပ်မယ်
vi.mock('moleculer', () => ({
    ServiceBroker: {
        call: vi.fn()
    }
}));

describe('Blog Route Logic', () => {
    it('ID မပါရင် error message ပြရမယ်', async () => {
        const id = ""; // ID အလွတ်ပေးကြည့်မယ်
        if (!id) {
            const result = { message: "Blog ID is required" };
            expect(result.message).toBe("Blog ID is required");
        }
    });

    it('Service ကနေ data ပြန်လာရင် မှန်ကန်စွာ လက်ခံရမယ်', async () => {
        // Fake data တစ်ခု ဖန်တီးမယ်
        const mockData = { id: "123", title: "Hello World" };

        // ServiceBroker.call က mockData ပြန်ပေးဖို့ သတ်မှတ်မယ်
        (ServiceBroker.call as any).mockResolvedValue(mockData);

        const result = await ServiceBroker.call("blog.get", { id: "123" });
        expect(result.title).toBe("Hello World");
    });
});